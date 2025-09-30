import axios from "axios";
import { useEffect, useState } from "react";

const CommunityQnA = () => {
  const [qnas, setQnas] = useState([]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const getQnas = async () => {
      try {
        console.log("실행중");
        const { data } = await axios.get("http://localhost:8080/questions");
        console.log(data);
        setQnas(data);
      } catch (error) {
        alert("오류 발생");
        console.log(error);
      }
    };
    getQnas();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-6">📚 도서관 Q&A 게시판</h1>

      <div className="space-y-4">
        {qnas.map((qna, index) => (
          <div
            key={qna.questionId || index}
            className="border rounded-lg overflow-hidden"
          >
            {/* 질문 헤더 */}
            <button
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-blue-600 font-semibold">
                [Q] {qna.title}
              </span>
              <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                {qna.memberName}
              </span>
            </button>

            {/* 답변 영역 */}
            {activeIndex === index && (
              <div className="bg-gray-50 px-4 py-4 space-y-4">
                <p className="border-b pb-2">
                  <span className="font-semibold">질문 내용:</span>{" "}
                  {qna.content}
                </p>
                <div
                  className={`p-3 rounded-lg ${
                    qna.answer
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <span className="font-semibold">[A] 답변:</span>{" "}
                  {qna.answer ? (
                    qna.answer
                  ) : (
                    <span className="italic">
                      아직 답변이 작성되지 않았습니다.
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityQnA;
