import BookLayout from "./BookLayout";
import BookRecommend from "./BookRecommend";

const BookRecommendComponent = () => {
  return <BookLayout children={<BookRecommend />} />;
};

export default BookRecommendComponent;
