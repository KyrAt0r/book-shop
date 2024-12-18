import {BookCard} from "@/shared/components/BookCard/BookCard";
import { useEffect, useState } from 'react';
import type { Books } from '@/shared/types/book';
import classes from './BookList.module.css';

export const BookList = () => {
  const [books, setBooks] = useState<Books>([]);
  const getData = () => {
    fetch('http://localhost:3001/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Ошибка загрузки данных:', error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={classes.cardContainer}>
        {books.map((book) => (
          <BookCard key={book.title} book={book}/>
        ))}
      </div>

    </>
  );
};
