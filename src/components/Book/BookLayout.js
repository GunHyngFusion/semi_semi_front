import React from 'react';
import { Link } from "react-router-dom";

const BookLayout = ({ children }) => {
  return (
    // 전체 페이지의 배경색과 컨테이너 설정
    <div className="book-detail-page bg-light min-vh-100"> 
      <div className="container-fluid p-0">
        <div className="row g-0">
          
          {/* 왼쪽 사이드바 (Navigation Panel) 영역 */}
          <div className="col-lg-2 col-md-3 p-4 bg-white border-end shadow-sm">
            <h5 className="mb-4 text-primary fw-bold border-bottom pb-2">도서 메뉴</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/book/list" className="text-decoration-none text-dark fw-medium d-block p-2 rounded hover-bg-light">
                  도서 리스트
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/book/detail" className="text-decoration-none text-dark fw-medium d-block p-2 rounded hover-bg-light">
                  세부 도서
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/book/recommend" className="text-decoration-none text-dark fw-medium d-block p-2 rounded hover-bg-light">
                  추천 도서
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/book/filter" className="text-decoration-none text-dark fw-medium d-block p-2 rounded hover-bg-light">
                  취향 도서
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 메인 콘텐츠 영역 (children이 여기에 렌더링됨) */}
          <div className="col-lg-10 col-md-9 main-content p-4">
            {children}
          </div>
          
        </div>
      </div>
      {/* 커스텀 CSS 스타일 (예시) */}
      <style jsx="true">{`
        .hover-bg-light:hover {
          background-color: #f8f9fa; /* Bootstrap light gray */
          color: #0d6efd !important; /* Primary color */
        }
      `}</style>
    </div>
  );
};
export default BookLayout;