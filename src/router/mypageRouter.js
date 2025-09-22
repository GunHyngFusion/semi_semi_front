import MyPage from "../pages/MyPage/MyPage";
import MyPageModify from "../pages/MyPage/MyPageModify";

const myPageRouter = () => {
  return [
    {
      path: ":id",
      element: <MyPage />,
    },
    {
      path: "modify",
      element: <MyPageModify />,
    },
  ];
};

export default myPageRouter;
