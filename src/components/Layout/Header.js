import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200 shadow-sm">
      {/* 로고 */}
      <div className="logo">
        <Link to="/" className="text-2xl font-bold text-green-800 no-underline">
          작은 그린 도서관
        </Link>
      </div>
      {/* 네비게이션 */}
      <nav className="nav">
        <ul className="flex items-center gap-8 m-0 p-0 list-none">
          <li>
            <Link
              to="/admin"
              className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800"
            >
              관리자(추후삭제)
            </Link>
          </li>
          <li>
            <Link
              to="/book/list"
              className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800"
            >
              도서검색
            </Link>
          </li>
          <li>
            <Link
              to="/libaryinfo/guide"
              className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800"
            >
              도서관 안내
            </Link>
          </li>
          <li>
            <Link
              to="/community/notice"
              className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800"
            >
              이용자 마당
            </Link>
          </li>
          <li>
            <Link
              to="/mypage"
              className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800"
            >
              마이페이지
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;