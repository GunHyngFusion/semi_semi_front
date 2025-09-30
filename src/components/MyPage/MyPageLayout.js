import React from 'react';
import { Link } from 'react-router-dom';

const MyPageLayout = ({ children }) => {
  return (
    // 전체 페이지의 배경색과 컨테이너 설정
    <div className="mypage-page bg-light min-vh-100">
      <div className="container-fluid p-0">
        <div className="row g-0">
          
          {/* 왼쪽 사이드바 (Navigation Panel) 영역 - 디자인 통일 */}
          <div className="col-lg-2 col-md-3 p-4 bg-white border-end shadow-sm">
            <h5 className="mb-4 text-primary fw-bold border-bottom pb-2">마이페이지 메뉴</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/mypage" className="text-decoration-none text-dark fw-medium d-block p-2 rounded hover-bg-light">
                  회원 정보
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/mypage/modify" className="text-decoration-none text-dark fw-medium d-block p-2 rounded hover-bg-light">
                  정보 수정
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 메인 콘텐츠 영역 */}
          <div className="col-lg-10 col-md-9 main-content p-4">
            {children}
          </div>
          
        </div>
      </div>
      {/* 커스텀 CSS 스타일 (호버 효과를 위한 인라인 스타일) */}
      <style jsx="true">{`
        .hover-bg-light:hover {
          background-color: #f8f9fa; /* Bootstrap light gray */
          color: #0d6efd !important; /* Primary color */
        }
      `}</style>
    </div>
  );
}

export default MyPageLayout