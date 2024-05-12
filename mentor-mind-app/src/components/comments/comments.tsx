import React from 'react';


interface Comment {
    username: string;
    text: string;
    timestamp?: string;
}

const comments: Comment[] = [
    { username: 'John Doe', text: 'This is a great article!' },
];

interface CommentsProps {
    comments: Comment[];
}


const Comment: React.FC<Comment> = ({ username, text, timestamp }: Comment) => {
    return (
        <div className="comment" key={username}>
            <p className="username">{username}</p>
            <p className="text">{text}</p>
            {timestamp && (
                <p className="timestamp">{timestamp}</p>
            )}
        </div>
    );
};


const Comments: React.FC<CommentsProps> = ({ comments }: CommentsProps) => {
    return (
        <div className="comments" style={{ marginTop: '10px' }}> {/* Adjust spacing as needed */}
            {comments.map((comment, index) => (
                <div key={comment.username} style={{ marginBottom: '35px' }}> {/* Adjust spacing as needed */}
                    <Comment {...comment} />
                </div>
            ))}
        </div>
    );
};

export default Comments;
