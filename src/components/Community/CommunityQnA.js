const CommunityQnA = () => {
  const questions = [
    {
      question: "📖 책을 대출하려면 어떻게 해야 하나요?",
      answer: "도서관 회원으로 등록한 후 회원증 또는 모바일 인증을 통해 대출할 수 있습니다. 1인당 최대 5권까지 14일간 대출 가능합니다.",
    },
    {
      question: "📚 책을 연장하고 싶은데 가능한가요?",
      answer: "대출 기간 내에 1회에 한해 연장할 수 있으며, 예약자가 있는 경우에는 연장이 불가능합니다.",
    },
    {
      question: "📕 책을 분실했을 경우 어떻게 하나요?",
      answer: "동일한 도서를 구입하여 반납하거나, 도서관 규정에 따라 변상 처리해야 합니다. 분실 신고는 즉시 해주세요.",
    },
    {
      question: "📗 희망도서를 신청할 수 있나요?",
      answer: "도서관 홈페이지 또는 방문 신청을 통해 희망도서를 요청할 수 있습니다. 심사를 거쳐 선정되며, 신청 후 약 2~3주 내에 비치 여부가 결정됩니다.",
    },
    {
      question: "📘 전자책도 이용할 수 있나요?",
      answer: "도서관 전자책 서비스에 로그인하면 스마트폰이나 태블릿으로도 열람 가능합니다. 일부 도서는 대출 후 일정 기간 동안만 열람 가능합니다.",
    },
    {
      question: "📙 책에 낙서하거나 밑줄을 그어도 되나요?",
      answer: "공공도서는 모두가 함께 사용하는 자산이므로 훼손 시에는 변상 책임이 따릅니다. 절대 낙서하거나 훼손하지 마세요.",
    },
  ];

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">📚 도서관 책 관련 Q&A</h1>

      <div className="qna-section bg-white border rounded p-4">
        <div className="accordion" id="bookQnaAccordion">
          {questions.map((item, index) => (
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
                  {item.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#bookQnaAccordion"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityQnA;