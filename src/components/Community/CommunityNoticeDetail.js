import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CommunityNoticeDetail = () => {
  const { noticeId } = useParams();
  const navigate = useNavigate(); // 목록으로 돌아가기 위한 navigate 함수
  const [notice, setNotice] = useState({});

  useEffect(() => {
    const getNotice = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/notice/info/${noticeId}`);
        setNotice(data);
      } catch (error) {
        console.log(error);
        alert("오류 발생");
      }
    };
    getNotice();
  }, [noticeId]);

  // 목록으로 돌아가는 함수
  const handleGoBack = () => {
    navigate('/community/notice'); // 공지사항 목록 페이지 경로로 이동
  };

  return (
    <div className="container mx-auto my-10 p-8 max-w-4xl bg-white shadow-lg rounded-lg">
      {/* 페이지 제목 */}
      <h1 className="text-3xl font-bold mb-6 border-b pb-4 text-gray-800">
        📢 공지사항
      </h1>

      {/* 공지사항 상세 내용 */}
      <div className="space-y-4">
        {/* 제목 */}
        <h2 className="text-2xl font-semibold text-gray-900">{notice.title || '제목을 불러오는 중...'}</h2>

        {/* 작성자 및 작성일 */}
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium mr-4">작성자: {notice.writer || '관리자'}</span>
          <span>작성일: {notice.createdAt ? new Date(notice.createdAt).toLocaleDateString() : '...'}</span>
        </div>

        {/* 구분선 */}
        <hr className="my-6" />

        {/* 내용 */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap min-h-[200px]">
          {notice.content || '내용을 불러오는 중...'}
        </div>
      </div>

      {/* 목록으로 돌아가기 버튼 */}
      <div className="mt-8 text-center">
        <button
          onClick={handleGoBack}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out"
        >
          목록으로
        </button>
      </div>
    </div>
  );
};

export default CommunityNoticeDetail;