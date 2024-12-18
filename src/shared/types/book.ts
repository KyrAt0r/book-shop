export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  price: number;
  genres: string[];
  bookCoverLink: string;
  description: string;
};

export type Books = Book[];
