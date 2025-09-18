import BookFilter from "./BookFilter";
import BookLayout from "./BookLayout";

const BookFilterComponent = () => {
  return <BookLayout children={<BookFilter />} />;
};

export default BookFilterComponent;
