import React from "react";

const BookRecommend = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">추천도서</h2>

      {/* 날짜 선택 및 버튼 영역 */}
      <div className="d-flex justify-content-center align-items-center mb-4 p-3 bg-light rounded">
        <button className="btn btn-outline-secondary me-2">〈</button>
        <span className="h5 mb-0 mx-3">2025년 09월</span>
        <button className="btn btn-outline-secondary ms-2">〉</button>
        <div className="ms-auto">
          <button className="btn btn-secondary">이전달</button>
        </div>
      </div>

      {/* 추천도서 목록 */}
      <div className="list-group">
        {/* 각 책의 항목 */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="list-group-item d-flex align-items-center mb-3 p-3 border rounded"
          >
            {/* 책 이미지 공간 */}
            <div
              className="me-4"
              style={{
                width: "100px",
                height: "150px",
                backgroundColor: "#e0e0e0",
              }}
            >
              {/* 여기에 책 표지 이미지 */}
            </div>

            {/* 책 정보 */}
            <div className="flex-grow-1">
              <h5 className="mb-1 fw-bold">오! 당근</h5>
              <p className="text-muted small mb-2">
                저자: 마리야아 엘라스트라흐 글·그림 | 출판사: 위즈덤하우스 |
                발행연도: 2025
              </p>
              <p className="mb-0 text-dark">
                혼자 지내기를 좋아하던 어느 날 엘리베이터에서 당근과 갑작스런
                친구가 됩니다. 「오! 당근」은 성격이 상반된 두 친구가 공간과
                이해 속에서 우정을 키워나가는 과정을 담고 있습니다. 하지만
                엄마의 눈으로 보면 아이와 당근이 정체를 알 수 없는 소꿉장난을
                하는 것에 불과합니다. 상상력 가득한...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRecommend;
