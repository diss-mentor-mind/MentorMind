import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './comments.css';
import CommentInterface from '../../interfaces/CommentInterface';

interface CommentProps {
    comment: CommentInterface;
    parentId?: number;
    allComments: CommentInterface[]; // Add allComments prop
}

const Comment: React.FC<CommentProps> = ({ comment, parentId, allComments }: CommentProps) => {
    const { id, author, content, timestamp } = comment;

    return (
        <div className="comment" key={id}>
            <div className="profile-info">
                <img src={"blank-profile-picture.png"} alt="Profile" className="profile-picture" />
                <div className="info">
                    <p className="username">{`${author?.firstName || 'Unknown'} ${author?.lastName || 'User'}`}</p>
                    <p className="text">{content}</p>
                    <p className="timestamp">Timestamp: {new Date(timestamp).toLocaleString()}</p>
                </div>
                {!parentId && <button className="add-comment-button"><FaPlus className="add-comment-icon" /></button>}
            </div>
            {/* Render replies */}
            {allComments.map(reply => {
                if (reply.replyTo?.id === id) {
                    return (
                        <div key={reply.id} className="reply" style={{ marginLeft: '20px' }}>
                            <Comment comment={reply} allComments={allComments} parentId={1} />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

interface CommentsProps {
    comments: CommentInterface[];
    parentId?: number;
}

const Comments: React.FC<CommentsProps> = ({ comments, parentId }) => {

        // Filter out comments that are not replies
        const topLevelComments = comments.filter(comment => !comment.replyTo);

    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {topLevelComments.map(comment => (
                <div key={comment.id} className="comment">
                    <Comment comment={comment} parentId={0} allComments={comments} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
