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
  readonly timestamp: Date;
  readonly type: string;
}

export const emptyMaterial: MaterialInterface = {
  id: 0,
  name: "",
  author: emptyAuthor,
  size: "",
  description: "",
  isAccepted: false,
  timestamp: new Date(),
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
    timestamp: new Date("2022-03-25"),
    type: "Video",
  },
  {
    id: 1,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "File",
  },
  {
    id: 2,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Archive",
  },
  {
    id: 3,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Archive",
  },
  {
    id: 4,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "File",
  },
  {
    id: 5,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 6,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 7,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 8,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 9,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 10,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 11,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 12,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
  {
    id: 13,
    name: "name2",
    author: populatedAuthor,
    size: "size",
    description: "description",
    isAccepted: true,
    timestamp: new Date("2024-03-25"),
    type: "Video",
  },
];
