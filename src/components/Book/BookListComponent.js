import BookLayout from "./BookLayout";
import BookList from "./BookList";

const BookListComponent = () => {
  return <BookLayout children={<BookList />} />;
};

export default BookListComponent;
