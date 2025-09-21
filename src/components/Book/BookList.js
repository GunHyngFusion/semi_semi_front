import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ['문학', '과학', '국내소설', '해외소설'];
  const etc = [...categories, '기타'];

  useEffect(() => {
    try {
      const getList = async () => {
        const { data } = await axios.get('http://localhost:8080/list');
        console.log(data)
        const finalData = data.map(book => 
          categories.includes(book.genre) ? book : { ...book, genre: '기타' }
        )
        setBookList(finalData)
      }; getList();
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleCheckedCategory = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category)
      }
      else {
        return [...prev, category]
      }
    })
  }
  const filteredBooks = selectedCategories.length == 0
    ? bookList
    : bookList.filter(book => selectedCategories.includes(book.genre))

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* 왼쪽 사이드바 (카테고리 + 검색 결과 통합) */}
        <div className="col-lg-3 col-md-4 bg-light p-4">
          <div className="card p-3 mb-4">
            <h5 className="card-title fw-bold">도서 카테고리</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">전체</li>
              {etc.map(category => (
                <li className="mb-2 d-flex justify-content-between align-items-center">
                  <span>{category}</span>
                  <input type="checkbox"
                    onChange={() => handleCheckedCategory(category)}
                    checked={selectedCategories.includes(category)}
                  />
                </li>
              )
              )}
            </ul>
          </div>

          <div className="card p-3 mb-4">
            <h5 className="card-title fw-bold">검색 결과</h5>
            <div className="mb-2">
              <strong>제목:</strong>
            </div>
            <div>
              <strong>카테고리: {selectedCategories.join(', ')}</strong>
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
            {filteredBooks.map((book, index) => (
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
                 <Link to={`/book/${book.isbn}`} className="text-decoration-none text-dark">
                  <p className="mb-0 fw-bold">{book.title}</p>
                  </Link>
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
