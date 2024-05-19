import AuthorInterface from "./AuthorInterface";
import MaterialInterface from "./MaterialInterface";


interface CommentInterface {
    id: number;
    author: AuthorInterface | null; // Author can be null for anonymous comments
    replyTo: CommentInterface | null; // Indicates if this comment is a reply to another comment
    content: string;
    timestamp: number;
    anchor: number | null; // Not sure what this property is used for, adjust accordingly
}

export default CommentInterface;