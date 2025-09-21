import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailMain = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState({}); // 빈 객체로 초기화

  useEffect(() => {
    const bookDetail = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/book/${isbn}`);
        setBook(data); // API 응답 데이터를 book 상태에 저장
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };
    bookDetail();
  }, [isbn]);

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">BookDetailPage</h1>
      <div className="book-info-section bg-white border rounded p-4 d-flex align-items-start">
        <img
          src={book.imageUrl || "https://placehold.co/150x220/eee/ccc?text=No+Image"}
          className="book-cover me-4 rounded"
          style={{ width: "150px", height: "auto" }}
          alt={book.title || "Book cover"}
        />
        <div className="flex-grow-1 book-meta-data">
          <div className="row mb-2">
            <div className="col-3 col-sm-2 fw-bold text-nowrap">제목</div>
            <div className="col-9 col-sm-10">{book.title || "정보 없음"}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3 col-sm-2 fw-bold text-nowrap">저자</div>
            <div className="col-9 col-sm-10">{book.author || "정보 없음"}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3 col-sm-2 fw-bold text-nowrap">발행사항</div>
            <div className="col-9 col-sm-10">{book.publisher || "정보 없음"}</div>
          </div>
          <div className="row mb-2">
            <div className="col-3 col-sm-2 fw-bold text-nowrap">ISBN</div>
            <div className="col-9 col-sm-10">{book.isbn || "정보 없음"}</div>
          </div>
        </div>
      </div>

      <div className="detailed-info-section bg-white border rounded mt-4 p-4">
        <h3 className="section-title">상세정보</h3>
        <p className="placeholder-text">
          {book.content || "상세 정보가 제공되지 않았습니다."}
        </p>
      </div>
    </div>
  );
};

export default BookDetailMain;