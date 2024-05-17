import AuthorInterface, { populatedAuthor } from "./AuthorInterface";
import MaterialInterface, { populatedMaterials } from "./MaterialInterface";

export default interface LectureInterface {
  readonly id?: number;
  readonly name: String;
  readonly icon: String;
  readonly author: AuthorInterface;
  readonly materials: MaterialInterface[];
}

export const populatedLectures: LectureInterface[] = [
  {
    id: 0,
    name: "Lecture 1",
    icon: "icon1",
    author: populatedAuthor,
    materials: populatedMaterials,
  },
  {
    id: 1,
    name: "Lecture 2",
    icon: "icon2",
    author: populatedAuthor,
    materials: populatedMaterials,
  },
  {
    id: 2,
    name: "Lecture with a long name to test the font size",
    icon: "icon3",
    author: populatedAuthor,
    materials: populatedMaterials,
  },
  {
    id: 3,
    name: "Lecture 4",
    icon: "icon4",
    author: populatedAuthor,
    materials: populatedMaterials,
  },
];
