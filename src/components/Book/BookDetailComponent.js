import BookDetailMain from "./BookDetailMain";
import BookLayout from "./BookLayout";

const BookDetailComponent = () => {
  return <BookLayout children={<BookDetailMain />} />;
};

export default BookDetailComponent;
