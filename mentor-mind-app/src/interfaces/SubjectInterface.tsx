import AuthorInterface, { populatedAuthor } from "./AuthorInterface";
import LectureInterface, { populatedLectures } from "./LectureInterface";


export default interface SubjectInterface {
    readonly id?: number;
    readonly name: String;
    readonly icon: String;
    readonly isApprovalNeeded: boolean;
    readonly teacher: AuthorInterface;
    readonly participants: AuthorInterface[];
    readonly lectures: LectureInterface[];
}

export const populatedSubjects: SubjectInterface[] = [
    {
        id: 0,
        name: "Course 1",
        icon: "icon1",
        isApprovalNeeded: false,
        teacher: populatedAuthor,
        participants: [populatedAuthor],
        lectures: populatedLectures,
    },
    {
        id: 1,
        name: "Course 2",
        icon: "icon2",
        isApprovalNeeded: false,
        teacher: populatedAuthor,
        participants: [populatedAuthor],
        lectures: populatedLectures,
    },
    {
        id: 2,
        name: "Course 3",
        icon: "icon3",
        isApprovalNeeded: false,
        teacher: populatedAuthor,
        participants: [populatedAuthor],
        lectures: populatedLectures,
    },
    {
        id: 3,
        name: "Course 4",
        icon: "icon4",
        isApprovalNeeded: false,
        teacher: populatedAuthor,
        participants: [populatedAuthor],
        lectures: populatedLectures,
    },
    {
        id: 4,
        name: "Course 5",
        icon: "icon5",
        isApprovalNeeded: false,
        teacher: populatedAuthor,
        participants: [populatedAuthor],
        lectures: populatedLectures,
    },
];