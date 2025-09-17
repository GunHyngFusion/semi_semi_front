import LibraryInfoGuidePage from "../pages/LibraryInfo/LibraryInfoGuidePage";
import LibraryInfoVisitUsPage from "../pages/LibraryInfo/LibraryInfoVisitUsPage";

const libraryInfoRouter = () => {
  return [
    {
      path: "guide",
      element: <LibraryInfoGuidePage />,
    },
    {
      path: "visitus",
      element: <LibraryInfoVisitUsPage />,
    },
  ];
};

export default libraryInfoRouter;
