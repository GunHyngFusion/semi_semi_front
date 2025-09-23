import axios from "axios";
import { useEffect, useState } from "react";

const CommunityFAQ = () => {
  // 1. state의 초기값을 배열 '[]'이 아닌 객체 '{}'로 설정합니다.
  const [groupedFaqs, setGroupedFaqs] = useState({});

  useEffect(() => {
    const getFaq = async () => {
      try {
        // 백엔드에서 이미 그룹화된 데이터를 받아옵니다.
        const { data } = await axios.get("http://localhost:8080/FAQ");
        setGroupedFaqs(data);
      } catch (error) {
        alert("에러 발생");
        console.log(error);
      }
    };
    getFaq();
  }, []);

  // 2. Object.keys()를 사용해 객체를 렌더링합니다.
  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">💼 자주 묻는 질문</h1>
      
      {/* groupedFaqs 객체의 키(카테고리명)들을 배열로 만들어 순회합니다. */}
      {Object.keys(groupedFaqs).map((category, categoryIndex) => (
        <div key={categoryIndex} className="faq-section bg-white border rounded p-4 mb-4">
          <h3 className="section-title">❓ {category}</h3>
          
          <div className="accordion" id={`faqAccordion-${categoryIndex}`}>
            
            {/* ✅ 여기가 핵심! 
              category 변수를 사용해 객체에서 해당 키의 '값(value)'을 꺼내옵니다.
              꺼내온 값은 FAQ 객체들의 '배열'이므로, 다시 map()으로 순회할 수 있습니다.
            */}
            {groupedFaqs[category].map((faq, faqIndex) => (
              <div className="accordion-item" key={faq.id}> {/* faq에 고유 id가 있다면 key로 사용하는 것이 가장 좋습니다 */}
                <h2 className="accordion-header" id={`heading-${categoryIndex}-${faqIndex}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${categoryIndex}-${faqIndex}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse-${categoryIndex}-${faqIndex}`}
                  className="accordion-collapse collapse"
                  data-bs-parent={`#faqAccordion-${categoryIndex}`}
                >
                  <div className="accordion-body">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityFAQ;