import React, { useState, useEffect, useRef } from 'react';
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
    fileType: string;
    handleDeleteComment: (id: number) => void;
    handleAddReply: (parentId: number, content: string) => void;
}

const Comment: React.FC<CommentProps> = ({
    comment,
    parentId,
    allComments,
    currentUser,
    materialId,
    fileType,
    handleDeleteComment,
    handleAddReply
}) => {
    const { id, author, content, timestamp, anchor } = comment;
    const [showConfirm, setShowConfirm] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
    const [newCommentText, setNewCommentText] = useState(""); // State to manage new comment text
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const userId = load("userId");

    const handleMouseDown = () => {
        timerRef.current = setTimeout(() => {
            setShowConfirm(true);
        }, 400); // Adjust the delay (in milliseconds) as needed
    };

    const handleMouseUp = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const isAuthor = author && author.id === userId;

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
                    {anchor !== 0 && (
                        <p>
                            At {fileType === 'pdf' ? 'page' : 'minute'}: {anchor}
                        </p>
                    )}

                    <p className="timestamp">Timestamp: {new Date(timestamp).toLocaleString()}</p>
                </div>
                {!parentId && (
                    <button className="add-comment-button" onClick={() => setShowPopup(true)}>
                        <FaPlus className="add-comment-icon" />
                    </button>
                )}
            </div>

            {/* Confirmation popup */}
            {showConfirm && isAuthor && (
                <div className="confirmation-popup">
                    <p>Are you sure you want to delete this comment?</p>
                    <button onClick={() => handleDeleteComment(id)}>Yes</button>
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
                        <button onClick={() => { handleAddReply(id, newCommentText); setShowPopup(false); }}>Submit Comment</button>
                        <button onClick={() => setShowPopup(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Render replies */}
            {allComments.filter(reply => reply.replyTo?.id === id).map(reply => (
                <div className="reply" style={{ marginLeft: '20px' }} key={reply.id}>
                    <Comment
                        comment={reply}
                        parentId={id}
                        allComments={allComments}
                        currentUser={currentUser}
                        materialId={materialId}
                        fileType={fileType}
                        handleDeleteComment={handleDeleteComment}
                        handleAddReply={handleAddReply}
                    />
                </div>
            ))}
        </div>
    );
};

interface CommentsProps {
    comments: CommentInterface[];
    currentUser: AuthorInterface;
    parentId?: number;
    materialId: string;
    fileType: string;
}

const Comments: React.FC<CommentsProps> = ({ comments, currentUser, parentId, materialId, fileType }) => {
    const [commentList, setCommentList] = useState<CommentInterface[]>([]);

    useEffect(() => {
        setCommentList(comments);
    }, [comments]);

    const handleDeleteComment = (id: number) => {
        fetch(`http://localhost:8080/api/comment/delete/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete comment');
                }
                setCommentList(prevComments => prevComments.filter(comment => comment.id !== id));
            })
            .catch(error => {
                console.error('Error deleting comment:', error);
            });
    };

    const handleAddReply = (parentId: number, content: string) => {
        const userId = load("userId");
        const userEmail = load("userEmail");
        const userFirstName = load("userName");
        const userLastName = load("userLastName");
        const userPassword = load("userPassword");
        const userRole = load("userRole");

        const newComment = {
            author: {
                id: userId,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                password: userPassword,
                role: userRole
            },
            replyTo: { id: parentId },
            content,
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
            .then(savedComment => {
                setCommentList(prevComments => [...prevComments, savedComment]);
            })
            .catch(error => {
                console.error('Error saving comment:', error);
            });
    };

    return (
        <div className="comments" style={{ marginTop: '10px' }}>
            {commentList.filter(comment => !comment.replyTo).map(comment => (
                <div key={comment.id} className="comment">
                    <Comment
                        comment={comment}
                        parentId={parentId}
                        allComments={commentList}
                        currentUser={currentUser}
                        materialId={materialId}
                        fileType={fileType}
                        handleDeleteComment={handleDeleteComment}
                        handleAddReply={handleAddReply}
                    />
                </div>
            ))}
        </div>
    );
};

export default Comments;
