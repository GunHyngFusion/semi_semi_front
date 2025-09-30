import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [notice, setNotice] = useState([]);
    const [qnas, setQnas] = useState([]);
    const navigate = useNavigate();
    
    const handleClick = (noticeId) => {
        navigate(`/community/notice/${noticeId}`)
    } //공지사항 클릭하면 공지사항 페이지로 이동

    useEffect(() => {
        const getNotice = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/notice/list`);
                console.log("공지사항 데이터:", data);
                const filteredData = data.slice(0, 5); //메인 페이지에 공지 5개만 표시 
                setNotice(filteredData) //공지사항 state 저장
            } catch (error) {
                console.error("공지사항 로딩 오류:", error);
            }
        }; 
        const getQna = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8080/questions`);
                console.log("QNA 데이터:", data);
                const filteredData = data.slice(0, 5);//메인 페이지에 qna 5개만 표시
                setQnas(filteredData)//qna state 저장
            } catch (error) {
                console.error("QNA 로딩 오류:", error);
            }
        };
        // 개별 비동기 함수 호출 유지
        getNotice();
        getQna();
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
                    // 'https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg'는 현재 존재하지 않는 주소입니다.
                    backgroundImage: "url('https://picsum.photos/1200/300')", 
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
                {/* --------------------------------- 공지사항 섹션 --------------------------------- */}
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
                                {/* 작성자 */}
                                <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-3 px-3 py-1 rounded-full">
                                    {item.writer}
                                </span>
                                {/* 제목 */}
                                <span className="flex-1 truncate">{item.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* ----------------------------------- Q&A 섹션 ---------------------------------- */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 h-full shadow-sm">
                    <h3 className="text-xl font-bold mb-5 text-gray-800">❓ Q&A</h3>
                    <div className="space-y-3">
                        {/* 💡 Q&A 목록을 공지사항과 동일한 스타일로 출력 */}
                        {qnas.map((item, index) => (
                            <button
                                key={item.questionId || index} // questionId가 있다면 그것을 key로 사용
                                type="button"
                                // Q&A는 클릭 시 상세 페이지로 이동하는 로직이 없으므로 임시로 빈 함수
                                onClick={() => {navigate('/community/qna') } }
                                className="w-full flex items-center text-left text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
                            >
                                {/* 작성자 */}
                                <span className="bg-gray-200 text-gray-800 text-xs font-semibold mr-3 px-3 py-1 rounded-full">
                                    {item.memberName}
                                </span>
                                {/* 제목 */}
                                <span className="flex-1 truncate">
                                    {item.title}
                                    {/* 💡 답변 유무에 따라 아이콘 추가 (선택적) */}
                                    {item.answer ? 
                                        <span className="text-xs text-green-500 ml-2">✅</span> : 
                                        <span className="text-xs text-red-500 ml-2">❌</span>
                                    }
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;