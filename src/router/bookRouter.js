import BookDetailPage from "../pages/Book/BookDetailPage";
import BookFilterPage from "../pages/Book/BookFilterPage";
import BookListPage from "../pages/Book/BookListPage";
import BookRecommendPage from "../pages/Book/BookRecommendPage";

const bookRouter = () => {
  return [
    // book

    {
      path: "filter",
      element: <BookFilterPage />,
    },
    {
      path: "list",
      element: <BookListPage />,
    },
    {
      path: "recommend",
      element: <BookRecommendPage />,
    },
        {
      path: ":isbn",
      element: <BookDetailPage />,
    },
  ];
};

export default bookRouter;
