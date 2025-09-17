import CommunityFAQPage from "../pages/Community/CommunityFAQPage";
import CommunityGalleryPage from "../pages/Community/CommunityGalleryPage";
import CommunityNoticePage from "../pages/Community/CommunityNoticePage";
import CommunityQnAPage from "../pages/Community/CommunityQnAPage";

const communityRouter = () => {
  return [
    {
      path: "faq",
      element: <CommunityFAQPage />,
    },
    {
      path: "gallery",
      element: <CommunityGalleryPage />,
    },
    {
      path: "notice",
      element: <CommunityNoticePage />,
    },
    {
      path: "qna",
      element: <CommunityQnAPage />,
    },
  ];
};

export default communityRouter;
