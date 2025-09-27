import axios from "axios";
import { useEffect, useState } from "react";

const CommunityQnA = () => {
  const [qnas, setQnas] = useState([])
  useEffect(() => {
    const getQnas=async()=>{
      try {
              console.log("실행중")
        const {data} = await axios.get('http://localhost:8080/questions')
        console.log(data)
        setQnas(data)
      } catch (error) {
        alert("오류 발생")
        console.log(error)
      } 
    };getQnas();
  
    
  }, [])

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title mb-4">📚 도서관 Q&A 게시판</h1>

      {/* 💡 아코디언 컴포넌트를 사용하여 질문/답변 목록을 깔끔하게 표시 */}
      <div className="accordion" id="qnaAccordion">
        {qnas.map((qna, index)=>(
          <div className="accordion-item" key={qna.questionId || index}>
            
            {/* 질문 헤더 (클릭 가능 영역) */}
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                <span className="fw-bold me-3 text-primary">[Q] {qna.title}</span>
                <span className="badge text-bg-secondary">{qna.memberName}</span>
              </button>
            </h2>
            
            {/* 답변 내용 영역 (접혀 있는 부분) */}
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#qnaAccordion"
            >
              <div className="accordion-body bg-light">
                
                {/* 질문 내용 */}
                <p className="mb-3 border-bottom pb-2">
                    <span className="fw-semibold">질문 내용:</span> {qna.content}
                </p>
                
                {/* 답변 내용 */}
                <div className="alert alert-success p-3 mb-0">
                    <span className="fw-semibold">[A] 답변:</span> 
                    {
                        // 답변이 null인 경우와 아닌 경우를 구분하여 표시
                        qna.answer ? qna.answer : 
                        <span className="text-danger fst-italic">아직 답변이 작성되지 않았습니다.</span>
                    }
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityQnA;