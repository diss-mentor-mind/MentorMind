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

interface CommentsProps {
    comments: Comment[];
}

const Comment: React.FC<Comment> = ({ id, username, text, timestamp, replies }: Comment) => {
    return (
        <div className="comment" key={id}>
            <div className="profile-info">
                <img src={"blank-profile-picture.png"} alt="Profile" className="profile-picture" />
                <div className="info">
                    <p className="username">{username}</p>
                    <p className="text">{text}</p>
                    <p className="timestamp">{timestamp}</p>
                </div>
                <button className="add-comment-button"><FaPlus className="add-comment-icon" /></button>
            </div>
            {/* Render replies
            {replies && replies.map(reply => (
                <div key={reply.id} className="reply">
                    <Comment {...reply} />
                </div>
            ))} */}
        </div>
    );
};

const Comments: React.FC<CommentsProps> = ({ comments }: CommentsProps) => {
    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <Comment {...comment} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
