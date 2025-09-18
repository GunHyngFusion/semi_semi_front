import React from "react";

const BookFilter = () => {
  return (
    <div className="container my-5">
      {/* 취향분석 추천도서 헤더 */}
      <div className="card p-4 mb-4">
        <div className="d-flex align-items-center">
          <div
            className="me-3"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
            }}
          >
            {/* 여기에 로고 이미지 */}
          </div>
          <div>
            <h5 className="fw-bold mb-1">취향분석 추천도서</h5>
            <p className="text-muted small mb-0">
              도서관 이용자의 개인별 취향을 빅데이터 분석에 맞춰 도서를
              추천해드립니다.
              <br />
              "다시추천받기" 버튼을 클릭하시면 취향 분석을 통한 새로운 도서를
              추천받으실 수 있습니다.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <a
            href="#"
            className="btn btn-sm btn-outline-primary d-flex align-items-center"
            style={{ width: "fit-content" }}
          >
            서비스 이용안내PDF보기 <span className="ms-1">↗</span>
          </a>
        </div>
      </div>

      {/* 단계별 진행바 */}
      <div className="d-flex justify-content-between mb-4">
        <div className="flex-fill text-center p-2 border-bottom border-primary border-3">
          <span className="fw-bold text-primary">연령정보 선택</span>
        </div>
        <div className="flex-fill text-center p-2 border-bottom border-secondary border-1">
          <span className="text-secondary">관심사 등록</span>
        </div>
        <div className="flex-fill text-center p-2 border-bottom border-secondary border-1">
          <span className="text-secondary">관심분야 등록</span>
        </div>
        <div className="flex-fill text-center p-2 border-bottom border-secondary border-1">
          <span className="text-secondary">관심도서 등록</span>
        </div>
        <div className="flex-fill text-center p-2 border-bottom border-secondary border-1">
          <span className="text-secondary">추천결과 보기</span>
        </div>
      </div>

      {/* 메인 콘텐츠: 연령대 선택 */}
      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="fw-bold text-primary">STEP1</div>
          <h4 className="flex-grow-1 text-center fw-bold m-0">
            당신의 연령대를 선택해 주세요
          </h4>
          <button className="btn btn-primary d-flex align-items-center">
            다음단계 <span className="ms-2">→</span>
          </button>
        </div>

        {/* 연령대 아이콘 그리드 */}
        <div className="row justify-content-center">
          {[
            "유아",
            "초등(8-13세)",
            "중등(14-16세)",
            "고등(17-19세)",
            "20대",
            "30대",
            "40대",
            "50대",
            "60대 이상",
          ].map((age, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg-2 mb-3 d-flex justify-content-center"
            >
              <div
                className="card text-center p-3 border"
                style={{ width: "150px" }}
              >
                <div
                  style={{
                    height: "80px",
                    width: "80px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                >
                  {/* 여기에 아이콘 이미지 */}
                </div>
                <div className="mt-2 fw-bold">{age}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookFilter;
