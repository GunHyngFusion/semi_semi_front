import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AdminSelectedContext from "./AdminSelectContext";

const AdminBook = () => {
  const [bookList, setBookList] = useState([]);
  const { selectedBookIsbn, setSelectedBookIsbn } = useContext(AdminSelectedContext);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/list');
        setBookList(data);
      } catch (error) {
        console.error(error);
      }
    };
    getList();
  }, []);

  const handleSelect = (isbn) => {
    setSelectedBookIsbn(isbn);
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover text-center align-middle">
        <thead className="table-light">
          <tr>
            <th>선택</th>
            <th>ISBN</th>
            <th>제목</th>
            <th>저자</th>
            <th>내용</th>
            <th>출판사</th>
            <th>출판년도</th>
            <th>장르</th>
            <th>대여 가능</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedBookIsbn === book.isbn}
                  onChange={() => handleSelect(book.isbn)}
                />
              </td>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.content}</td>
              <td>{book.publisher}</td>
              <td>{book.publication_year}</td>
              <td>{book.genre}</td>
              <td>{book.is_available ? '가능' : '불가능'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBook;