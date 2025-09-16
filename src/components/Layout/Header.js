import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">📚 도서관</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/book/search">도서검색</Link></li>
          <li><Link to="/libraryinfo/guide">도서관 안내</Link></li>
          <li><Link to="/community/notice">이용자 마당</Link></li>
          <li><Link to="/mypage">마이페이지</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;