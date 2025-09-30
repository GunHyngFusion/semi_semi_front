import axios from "axios";
import { useEffect, useState } from "react";

const CommunityFAQ = () => {
  const [groupedFaqs, setGroupedFaqs] = useState({});
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/FAQ")
      .then((res) => setGroupedFaqs(res.data))
      .catch((err) => console.error("에러 발생", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-6">💼 자주 묻는 질문</h1>

      {Object.entries(groupedFaqs).map(([category, faqs]) => (
        <div key={category} className="mb-6">
          <h2 className="text-lg font-semibold mb-3">❓ {category}</h2>

          {faqs.map((faq, i) => {
            const key = `${category}-${i}`;
            const open = activeKey === key;

            return (
              <div key={faq.id} className="border rounded mb-2">
                <button
                  onClick={() => setActiveKey(open ? null : key)}
                  className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200"
                >
                  {faq.question}
                </button>
                {open && (
                  <div className="px-4 py-2 bg-gray-50 text-sm text-gray-700 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CommunityFAQ;
