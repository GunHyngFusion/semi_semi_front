import BookDetailPage from "../pages/Book/BookDetailPage";
import BookFilterPage from "../pages/Book/BookFilterPage";
import BookListPage from "../pages/Book/BookListPage";
import BookSearchPage from "../pages/Book/BookSearchPage";

const bookRouter = () => {
  return [
    // book
    {
      path: "detail",
      element: <BookDetailPage />,
    },
    {
      path: "filter",
      element: <BookFilterPage />,
    },
    {
      path: "list",
      element: <BookListPage />,
    },
    {
      path: "search",
      element: <BookSearchPage />,
    },
  ];
};

export default bookRouter;
