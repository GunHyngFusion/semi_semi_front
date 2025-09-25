import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [notice, setNotice] = useState([]);
  const navigate = useNavigate();
  const categories = ['notice/list']; //qna recommandation 백엔드 구성 시 추가 예정
  const handleClick = (noticeId) => {
    navigate(`notice/${noticeId}`)
  }

  useEffect(() => {
    const get = async () => {
      for (let i = 0; i < categories.length; i++) {
        const { data } = await axios.get(`http://localhost:8080/${categories[i]}`);
        console.log(data)
        const filteredData = data.slice(0, 5);
        setNotice(filteredData)
      }
    }; get()
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* 상단 환영 메시지 */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">🎉 작은 그림 도서관에 오신 것을 환영합니다!</h1>
      </div>

      {/* 배경 배너 */}
      <div
        className="mb-10 text-white flex items-center justify-center rounded-xl shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg')",
          height: "300px",
        }}
      >
        <div className="bg-black bg-opacity-50 px-8 py-4 rounded-lg text-center">
          <h2 className="text-3xl font-bold">
            📚 가을 독서 캠페인 진행중!
          </h2>
        </div>
      </div>

      {/* 이달의 추천도서 (원래 코드처럼 주석 처리 유지) */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">📚 이달의 추천도서</h2>
        {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
           ... 추천 도서 목록 ...
         </div> */}
      </div>

      {/* 공지사항 & Q&A */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 공지사항 섹션 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 h-full shadow-sm">
          <h3 className="text-xl font-bold mb-5 text-gray-800">📢 공지사항</h3>
          <div className="space-y-3">
            {notice.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleClick(item.noticeId)}
                className="w-full flex items-center text-left text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
              >
                {/* 작성자: 회색 배경의 둥근 배지 스타일 */}
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-3 px-3 py-1 rounded-full">
                  {item.writer}
                </span>
                {/* 제목 */}
                <span className="flex-1 truncate">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Q&A 섹션 */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 h-full shadow-sm">
          <h3 className="text-xl font-bold mb-5 text-gray-800">❓ Q&A</h3>
          {/* <ul className="list-unstyled">
             ... Q&A 목록 ...
           </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Main;

