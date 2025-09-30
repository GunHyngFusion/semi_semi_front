import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Link 대신 useNavigate를 사용합니다.

const CommunityNotice = () => {
  const [notices, setNotice] = useState([]); // 공지 저장 state 
  const navigate = useNavigate(); // 페이지 이동을 위한 함수

  useEffect(() => {
    const getNotices = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/notice/list'); //공지사항 데이터 받아옴
        setNotice(data);
      } catch (error) {
        console.log(error);
        alert('오류 발생');
      }
    };
    getNotices(); //IIFE
  }, []);

  // 공지사항 클릭 시 상세 페이지로 이동하는 함수
  const handleNoticeClick = (noticeId) => {
    navigate(`/community/notice/${noticeId}`);
  };

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">📢 공지사항</h1>

      <div className="bg-white border rounded p-4">
        {/* Bootstrap 클래스는 유지하고, Tailwind CSS를 추가하여 스타일을 보강합니다. */}
        <table className="table table-hover text-center w-full">
          <thead className="table-light">
            <tr>
              <th className="w-1/12">번호</th>
              <th className="w-2/12">작성자</th>
              <th className="w-5/12">제목</th>
              <th className="w-2/12">작성일</th>
              <th className="w-1/12">첨부</th>
              <th className="w-1/12">조회수</th>
            </tr>
          </thead>
          
          {/* <tbody> 태그로 본문 영역을 감싸주는 것이 좋습니다. */}
          <tbody>
            {notices.map((notice) => (
              // <tr>에 직접 onClick 이벤트를 추가합니다.
              <tr 
                key={notice.noticeId} 
                onClick={() => handleNoticeClick(notice.noticeId)}
                className="cursor-pointer hover:bg-gray-50" // 마우스 커서와 호버 효과 추가
              >
                <td>{notice.noticeId}</td>
                <td>{notice.writer}</td>
                <td className="text-start">{notice.title}</td>
                {/* 날짜 형식을 '년. 월. 일.' 형태로 변경하여 가독성을 높입니다. */}
                <td>{new Date(notice.createdAt).toLocaleDateString()}</td>
                <td>{notice.attachment ? "📎" : "-"}</td>
                <td>{notice.viewCount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 페이지네이션 (기능 구현은 별도로 필요합니다) */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {/* ... 페이지네이션 아이템들 ... */}
            <li className="page-item active"><span className="page-link">1</span></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommunityNotice;