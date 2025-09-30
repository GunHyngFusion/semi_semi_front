import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../User/LoginComponent";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //로그인 상태 저장 state
  const email = localStorage.getItem('email') //로그인 시 email 저장됨
  
  useEffect(() => {
    const checkLogin = () => {
      const status = localStorage.getItem('isLoggedIn') === 'true' //로컬스토리지 에 email 있으면 로그인중 state 저장
      setIsLoggedIn(status)
    }
    
    checkLogin();
    window.addEventListener('storage', checkLogin); 
    
    return () => {
      window.removeEventListener('storage', checkLogin);
    }
  }, [])
  
  return (
    // 전체를 flex로 감싸고 space-between으로 로고와 메뉴/로그인 영역을 양 끝에 배치
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200 shadow-md">
      
      {/* 1. 로고 (왼쪽 정렬) */}
      <div className="logo">
        <Link to="/" className="text-2xl font-bold text-green-800 no-underline">
          작은 그린 도서관
        </Link>
      </div>

      {/* 2. 내비게이션 컨테이너 (메뉴 가운데 정렬을 위해 flex-grow 적용) */}
      {/* flex-grow를 사용하여 남은 공간을 차지하고, justify-center로 ul을 중앙에 배치 */}
      <nav className="nav flex-grow flex justify-center">
        <ul className="flex items-center gap-8 m-0 p-0 list-none">
          
          {/* 주 메뉴 항목들 (가운데 정렬) */}
          <li>
            <Link to="/admin" className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800">
              관리자(추후삭제)
            </Link>
          </li>
          <li>
            <Link to="/book/list" className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800">
              도서검색
            </Link>
          </li>
          <li>
            <Link to="/libaryinfo/guide" className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800">
              도서관 안내
            </Link>
          </li>
          <li>
            <Link to="/community/notice" className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800">
              이용자 마당
            </Link>
          </li>
          
          {/* 마이페이지: 로그인 시에만 표시 (메뉴의 일부로 가운데 정렬) */}
          {isLoggedIn && (
            <li>
              <Link to={`/mypage/${email}`} className="text-gray-700 font-medium no-underline transition-colors duration-300 hover:text-green-800">
                마이페이지
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* 3. 로그인 컴포넌트 (오른쪽 정렬) */}
      {/* flex-shrink-0을 사용하여 메뉴가 밀리지 않게 함 */}
      <div className="flex-shrink-0 ml-8"> 
        <LoginComponent onStatusChange={setIsLoggedIn}/>
      </div>
    </header>
  );
};

export default Header;