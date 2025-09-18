import React from "react";

const BookList = () => {
  const books = [
    { title: "제목 대충지음 1" },
    { title: "제목 대충지음 2" },
    { title: "제목 대충지음 3" },
    { title: "제목 대충지음 4" },
    { title: "제목 대충지음 5" },
    { title: "제목 대충지음 6" },
  ];

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* 왼쪽 사이드바 (카테고리 + 검색 결과 통합) */}
        <div className="col-lg-3 col-md-4 bg-light p-4">
          <div className="card p-3 mb-4">
            <h5 className="card-title fw-bold">도서 카테고리</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">전체</li>
              <li className="mb-2 d-flex justify-content-between align-items-center">
                <span>문학</span>
                <input type="checkbox" />
              </li>
              <li className="mb-2 d-flex justify-content-between align-items-center">
                <span>국내소설</span>
                <input type="checkbox" />
              </li>
              <li className="mb-2 d-flex justify-content-between align-items-center">
                <span>해외소설</span>
                <input type="checkbox" />
              </li>
              <li className="mb-2 d-flex justify-content-between align-items-center">
                <span>과학</span>
                <input type="checkbox" />
              </li>
              <li className="mb-2">등등..</li>
            </ul>
          </div>

          <div className="card p-3 mb-4">
            <h5 className="card-title fw-bold">검색 결과</h5>
            <div className="mb-2">
              <strong>제목:</strong>
            </div>
            <div>
              <strong>카테고리:</strong> 문학
            </div>
            <h6 className="fw-bold mt-4">최근 검색어</h6>
            <ol className="mb-0">
              <li>이것이 자바다 (개정판)</li>
              <li>리액트를 활용한 쇼핑몰 만들기</li>
              <li>아낌없이 나온 암탉</li>
              <li>노인과 바다</li>
            </ol>
          </div>
        </div>

        {/* 메인 콘텐츠 영역 (책 목록) */}
        <div className="col-lg-9 col-md-8 p-4">
          <div className="row">
            {/* Placeholder for book items */}
            {[...Array(9)].map((_, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="text-center">
                  <div
                    style={{
                      height: "200px",
                      backgroundColor: "#e0e0e0",
                      marginBottom: "10px",
                    }}
                  >
                    {/* Image Placeholder */}
                  </div>
                  <p className="mb-0 fw-bold">제목 대충지음 {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
