
import MyPageLayout from './MyPageLayout';
import MyPageModify from './MyPageModify';

const MyPageModifyComponent = () => {
  return <MyPageLayout children={<MyPageModify />} />;
}

export default MyPageModifyComponent
