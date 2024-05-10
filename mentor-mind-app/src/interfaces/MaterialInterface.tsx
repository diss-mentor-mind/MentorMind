import AuthorInterface, {
  emptyAuthor,
  populatedAuthor,
} from "./AuthorInterface";

export default interface MaterialInterface {
  readonly id?: number;
  readonly name: String;
  readonly author: AuthorInterface;
  readonly size: string;
  readonly description: string;
  readonly isAccepted: boolean;
  readonly timeStamp: Date;
  readonly type: string;
}

export const emptyMaterial: MaterialInterface = {
  id: 0,
  name: "",
  author: emptyAuthor,
  size: "",
  description: "",
  isAccepted: false,
  timeStamp: new Date(),
  type: "",
};

export const populatedMaterials: MaterialInterface[] = [
  {
    id: 0,
    name: "Name",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: false,
    timeStamp: new Date("2022-03-25"),
    type: "Video",
  },
  {
    id: 1,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "File",
  },
  {
    id: 2,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "Archive",
  },
  {
    id: 3,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "Archive",
  },
  {
    id: 4,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "File",
  },
  {
    id: 5,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 6,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 7,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timeStamp: new Date("2024-03-25"),
    type: "Video",
  },
];
