import React, { useState, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import './comments.css';
import CommentInterface from '../../interfaces/CommentInterface';
import AuthorInterface from '../../interfaces/AuthorInterface';

interface CommentProps {
    comment: CommentInterface;
    parentId?: number;
    allComments: CommentInterface[];
    currentUser: AuthorInterface;
}

const Comment: React.FC<CommentProps> = ({ comment, parentId, allComments, currentUser }) => {
    const { id, author, content, timestamp, anchor } = comment;
    const [showConfirm, setShowConfirm] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseDown = () => {
       // if (author && currentUser && author.id === currentUser.id) {
         //   timerRef.current = setTimeout(() => {
                setShowConfirm(true);
          //  }, 1000); // Long press duration in milliseconds
        //}
    };

    const handleMouseUp = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const handleDelete = (id: number) => {
        if (author && author.id === currentUser.id) {
            fetch(`http://localhost:8080/api/comment/delete/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete comment');
                }
                console.log(`Comment with id: ${id} deleted successfully.`);
                setShowConfirm(false);
            })
            .catch(error => {
                console.error('Error deleting comment:', error);
            });
        } else {
            console.error('You are not authorized to delete this comment.');
        }
    };
    
    return (
        <div className="comment" key={id}>
            <div
                className="profile-info"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <img src={"blank-profile-picture.png"} alt="Profile" className="profile-picture" />
                <div className="info">
                    <p className="username">{`${author?.firstName || 'Unknown'} ${author?.lastName || 'User'}`}</p>
                    <p className="text">{content}</p>
                    <p>At: {anchor}</p>
                    <p className="timestamp">Timestamp: {new Date(timestamp).toLocaleString()}</p>
                </div>
                {!parentId && <button className="add-comment-button"><FaPlus className="add-comment-icon" /></button>}
            </div>

            {/* Confirmation popup */}
            {showConfirm && (
                <div className="confirmation-popup">
                    <p>Are you sure you want to delete this comment?</p>
                    <button onClick={() => handleDelete(id)}>Yes</button>
                    <button onClick={() => setShowConfirm(false)}>No</button>
                </div>
            )}

            {/* Render replies */}
            {allComments.map(reply => {
                if (reply.replyTo?.id === id) {
                    return (
                        <div className="reply" style={{ marginLeft: '20px' }} key={reply.id}>
                            <Comment comment={reply} parentId={id} allComments={allComments} currentUser={currentUser} />
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
    currentUser: AuthorInterface;
    parentId?: number;
}

const Comments: React.FC<CommentsProps> = ({ comments, currentUser, parentId }) => {
    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {comments.filter(comment => !comment.replyTo).map(comment => (
                <div key={comment.id} className="comment">
                    <Comment comment={comment} parentId={parentId} allComments={comments} currentUser={currentUser} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
