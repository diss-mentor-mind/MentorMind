import React, { useState, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import './comments.css';
import CommentInterface from '../../interfaces/CommentInterface';
import AuthorInterface from '../../interfaces/AuthorInterface';
import { load } from '../../util/localStorage';

interface CommentProps {
    comment: CommentInterface;
    parentId?: number;
    allComments: CommentInterface[];
    currentUser: AuthorInterface;
    materialId: string;
}

const Comment: React.FC<CommentProps> = ({ comment, parentId, allComments, currentUser, materialId }) => {
    const { id, author, content, timestamp, anchor } = comment;
    const [showConfirm, setShowConfirm] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
    const [newCommentText, setNewCommentText] = useState(""); // State to manage new comment text
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const userId = load("userId");
    const userEmail = load("userEmail");
    const userFirstName = load("userName");
    const userLastName = load("userLastName");
    const userPassword = load("userPassword");
    const userRole = load("userRole");

    const handleMouseDown = () => {
        setShowConfirm(true);
    };

    const handleMouseUp = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const handleDelete = (id: number) => {
        console.log(`Comment with id: ${id} start delete`);
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
    };

    const handleAddComment = () => {
        const newComment = {
            author: {
                id: userId,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                password: userPassword,
                role: userRole
              }, 
            replyTo: comment,
            content: newCommentText,
            anchor: 0
        };

        fetch(`http://localhost:8080/api/comment/save/${materialId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to save comment');
            }
            return response.json();
        })
        .then(() => {
            setShowPopup(false); // Close the pop-up after saving the comment
        });
    };

    return (
        <div className="comment" key={id}>
            <div
                className="profile-info"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
               <img src="/blank-profile-picture.png" alt="Profile" className="profile-picture" />

                <div className="info">
                    <p className="username">{`${author?.firstName || 'Unknown'} ${author?.lastName || 'User'}`}</p>
                    <p className="text">{content}</p>
                    <p>At: {anchor}</p>
                    <p className="timestamp">Timestamp: {new Date(timestamp).toLocaleString()}</p>
                </div>
                {!parentId && (
                    <button className="add-comment-button" onClick={() => setShowPopup(true)}>
                        <FaPlus className="add-comment-icon" />
                    </button>
                )}
            </div>

            {/* Confirmation popup */}
            {showConfirm && (
                <div className="confirmation-popup">
                    <p>Are you sure you want to delete this comment?</p>
                    <button onClick={() => handleDelete(id)}>Yes</button>
                    <button onClick={() => setShowConfirm(false)}>No</button>
                </div>
            )}

            {/* Comment pop-up */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <input
                            type="text"
                            value={newCommentText}
                            onChange={(e) => setNewCommentText(e.target.value)}
                            placeholder="Enter your comment"
                        />
                        <button onClick={handleAddComment}>Submit Comment</button>
                        <button onClick={() => setShowPopup(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Render replies */}
            {allComments.map(reply => {
                if (reply.replyTo?.id === id) {
                    return (
                        <div className="reply" style={{ marginLeft: '20px' }} key={reply.id}>
                            <Comment comment={reply} parentId={id} allComments={allComments} currentUser={currentUser} materialId={materialId} />
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
    materialId: string;
}

const Comments: React.FC<CommentsProps> = ({ comments, currentUser, parentId, materialId }) => {
    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {comments.filter(comment => !comment.replyTo).map(comment => (
                <div key={comment.id} className="comment">
                    <Comment comment={comment} parentId={parentId} allComments={comments} currentUser={currentUser} materialId={materialId} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
