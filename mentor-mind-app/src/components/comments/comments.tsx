import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './comments.css';

interface Comment {
    id: string;
    username: string;
    text: string;
    timestamp?: string;
    profilePicture: string | null;
    replies?: Comment[];
}

interface CommentProps extends Comment {
    parentId?: string;
}

interface CommentsProps {
    comments: Comment[];
    parentId?: string; // Add a parentId prop to identify the parent comment
}

const Comment: React.FC<CommentProps> = ({ id, username, text, timestamp, replies, parentId }: CommentProps) => {
    return (
        <div className="comment" key={id}>
            <div className="profile-info">
                <img src={"blank-profile-picture.png"} alt="Profile" className="profile-picture" />
                <div className="info">
                    <p className="username">{username}</p>
                    <p className="text">{text}</p>
                    <p className="timestamp">{timestamp}</p>
                </div>
                {/* Render reply button only if it's not a reply */}
                {!parentId && <button className="add-comment-button"><FaPlus className="add-comment-icon" /></button>}
            </div>
            {/* Render replies */}
            {replies && replies.map(reply => (
                <div key={reply.id} className="reply" style={{ marginLeft: '20px' }}>
                    <Comment {...reply} parentId={id} /> {/* Pass parent ID to child comments */}
                </div>
            ))}

        </div>
    );
};

const Comments: React.FC<CommentsProps> = ({ comments, parentId }) => {
    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <Comment {...comment} parentId={parentId} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
