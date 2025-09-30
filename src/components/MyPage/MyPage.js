import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyPage = () => {
  const [memberInfo, setMemberInfo] = useState({}); //멤버 정보 저장 state 
  const { id } = useParams();
  useEffect(() => {
     const getMemberInfo = async () => {
      try { 
        const { data } = await axios.get(`http://localhost:8080/member/info/${id}`) //email 로 멤버 정보 가져옴
        setMemberInfo(data); //백엔드에서 전달한 멤버 정보 state 에 저장
      } catch (error) {
        alert("오류 발생");
        console.log(error);
      }
    };getMemberInfo()
  }, [id]) //email 변경 시 실행

  return (
    <div className="p-4 md:p-8 w-full max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        👤 <span className="ml-2">회원 정보</span>
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
        <h5 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200 flex items-center">
          <span className="text-blue-500 mr-2">📌</span> 기본 정보
        </h5>

        <ul className="list-none space-y-4">
          {/* 각 정보 항목을 Flexbox로 정렬 */}
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">이름:</div>
            <div className="text-gray-900 truncate">{memberInfo.name}</div>
          </li>
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">생년월일:</div>
            <div className="text-gray-900 truncate">{memberInfo.birth_date}</div>
          </li>
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">주소:</div>
            <div className="text-gray-900 truncate">{memberInfo.address}</div>
          </li>
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">전화번호:</div>
            <div className="text-gray-900 truncate">{memberInfo.phone_number}</div>
          </li>
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">이메일:</div>
            <div className="text-gray-900 truncate">{memberInfo.email}</div>
          </li>
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">가입일:</div>
            <div className="text-gray-900 truncate">{memberInfo.join_date}</div>
          </li>
          <li className="flex items-center">
            <div className="font-medium text-gray-600 w-28 md:w-36 flex-shrink-0">등급:</div>
            <div className="text-gray-900 truncate">{memberInfo.grade}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPage;