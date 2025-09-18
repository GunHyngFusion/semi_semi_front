const CommunityFAQ = () => {
  const faqs = [
    "상환조회 신청한 이도서를 이전이전에 업무시간 종료 후 수정할 수 있나요?",
    "상환조회 서비스가 무엇인가요?",
    "상환조회 신청접수는 몇 건인가요?",
    "상환조회 서비스는 어떻게 신청하나요?",
  ];

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">💼 상환조회 서비스 안내</h1>

      <div className="faq-section bg-white border rounded p-4 mb-4">
        <h3 className="section-title">❓ 자주 묻는 질문</h3>
        <div className="accordion" id="faqAccordion">
          {faqs.map((question, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion" // 이 줄이 핵심! 한 개만 열리게 함
              >
                <div className="accordion-body">
                  {/* 여기에 각 질문에 대한 실제 답변을 넣을 수 있음 */}
                  답변 내용은 해당 서비스 안내 페이지를 참고해주세요.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityFAQ;