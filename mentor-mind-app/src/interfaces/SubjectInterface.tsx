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
    name: "Course One",
    icon: "icon1",
    isApprovalNeeded: false,
    teacher: populatedAuthor,
    participants: [populatedAuthor],
    lectures: populatedLectures,
  },
  {
    id: 1,
    name: "Course Two",
    icon: "icon2",
    isApprovalNeeded: false,
    teacher: populatedAuthor,
    participants: [populatedAuthor],
    lectures: populatedLectures,
  },
  {
    id: 2,
    name: "Course Three",
    icon: "icon3",
    isApprovalNeeded: false,
    teacher: populatedAuthor,
    participants: [populatedAuthor],
    lectures: populatedLectures,
  },
  {
    id: 3,
    name: "This Name Is Longer To Check That It Fits",
    icon: "icon4",
    isApprovalNeeded: false,
    teacher: populatedAuthor,
    participants: [populatedAuthor],
    lectures: populatedLectures,
  },
  {
    id: 4,
    name: "Course Five",
    icon: "icon5",
    isApprovalNeeded: false,
    teacher: populatedAuthor,
    participants: [populatedAuthor],
    lectures: populatedLectures,
  },
  {
    id: 5,
    name: "Course Six",
    icon: "icon6",
    isApprovalNeeded: false,
    teacher: populatedAuthor,
    participants: [populatedAuthor],
    lectures: populatedLectures,
  },
];
