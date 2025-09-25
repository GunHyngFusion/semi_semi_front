import CommunityFAQPage from "../pages/Community/CommunityFAQPage";
import CommunityGalleryPage from "../pages/Community/CommunityGalleryPage";
import CommunityNoticeDetailPage from "../pages/Community/CommunityNoticeDetailPage";
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
    {
      path: "notice/:noticeId",
      element: <CommunityNoticeDetailPage />,
    },
  ];
};

export default communityRouter;
