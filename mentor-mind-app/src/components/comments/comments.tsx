import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './comments.css';
import CommentInterface from '../../interfaces/CommentInterface';


interface CommentProps {
    comment: CommentInterface;
    parentId?: number;
}

const Comment: React.FC<CommentProps> = ({ comment, parentId }: CommentProps) => {
    const { id, author, content, timestamp, replyTo } = comment;
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
            {replyTo && (
                <div className="reply" style={{ marginLeft: '20px' }}>
                    <Comment comment={replyTo} parentId={id} />
                </div>
            )}
        </div>
    );
};

interface CommentsProps {
    comments: CommentInterface[];
    parentId?: number;
}

const Comments: React.FC<CommentsProps> = ({ comments, parentId }) => {
    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <Comment comment={comment} parentId={parentId} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
