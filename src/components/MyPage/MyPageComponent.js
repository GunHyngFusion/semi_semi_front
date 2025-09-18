
import MyPageLayout from './MyPageLayout';
import MyPage from './MyPage';

const MyPageComponent = () => {
  return <MyPageLayout children={<MyPage />} />;
}

export default MyPageComponent
