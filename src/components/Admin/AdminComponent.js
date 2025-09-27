// import React from 'react';
// import AdminLayout from "./AdminLayout";
// import AdminBook from "./AdminBook";
// import AdminCommunityFAQ from "./AdminCommunityFAQ";

// // 🚨 Named Import 방식으로 수정 완료
// import { BookApi } from "../../apis/book/BookApi";
// import { CommunityApi } from "../../apis/community/CommunityApi";
// import { LibraryApi } from "../../apis/library/LibraryApi";
// import { MyPageApi } from "../../apis/mypage/MyPageApi";

// const AdminComponent = () => {
//     // 경고(Warning) 해결을 위해 'api' 변수 선언 삭제 (또는 주석 처리)

//     return (
//         <div>
//             <AdminLayout children={<AdminBook />} funcs={BookApi} />
//             <AdminLayout children={<AdminCommunityFAQ />} funcs={CommunityApi} />
//             <AdminLayout children={<AdminCommunityFAQ />} funcs={LibraryApi} />
//             <AdminLayout children={<AdminCommunityFAQ />} funcs={MyPageApi} />
//         </div>
//     );
// };

// export default AdminComponent;