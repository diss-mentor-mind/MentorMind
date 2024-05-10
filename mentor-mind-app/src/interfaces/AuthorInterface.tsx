export default interface AuthorInterface {
  readonly id?: number;
  readonly email: String;
  readonly firstName: string;
  readonly lastName: string;
  readonly role: string;
}

export const emptyAuthor: AuthorInterface = {
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  role: "",
};

export const populatedAuthor: AuthorInterface = {
  id: 0,
  email: "iulia@gmail.com",
  firstName: "firstName",
  lastName: "lastName",
  role: "role",
};
