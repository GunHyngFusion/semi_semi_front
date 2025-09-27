import axios from "axios";
import React, { useState } from "react";

const AdminLayout = ({ children, funcs, id, type }) => {
  const { readOne, deleteOne, insert, update } = funcs;
  const [findReadOne, setFindReadOne] = useState({});
  const [isOpenOne, setOpenOne] = useState(false);
  const [isOpenAdd, setOpenAdd] = useState(false);

const [photo, setPhoto] = useState(null); // 파일 state


  const [newGallery, setNewGallery] = useState({
    writer: "",
    title: "",
    content: "",
    photo_url: "",
  });

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>

      {/* 버튼들 */}
      <div className="btn-group mb-4 w-100">
        <button
          onClick={() => {
            readOne(id)
              .then((item) => {
                setFindReadOne(item);
                setOpenOne(true);
              })
              .catch((err) => console.error(err));
          }}
          className="btn btn-primary w-25"
        >
          1개 읽기
        </button>
        <button onClick={() => deleteOne(id)} className="btn btn-danger w-25">
          삭제
        </button>
        <button onClick={() => setOpenAdd(true)} className="btn btn-success w-25">
          추가
        </button>
        <button onClick={() => update(id)} className="btn btn-warning w-25">
          수정
        </button>
      </div>

      {/* 상세보기 */}
      {isOpenOne && type === "book" && (
        <div className="card p-4 shadow-sm mb-4">
          <h3 className="mb-3">도서 상세보기</h3>
          <p><strong>제목:</strong> {findReadOne.title}</p>
          <p><strong>저자:</strong> {findReadOne.author}</p>
          <p><strong>내용:</strong> {findReadOne.content}</p>
          <p><strong>출판사:</strong> {findReadOne.publisher}</p>
          <p><strong>출판년도:</strong> {findReadOne.publication_year}</p>
          <p><strong>장르:</strong> {findReadOne.genre}</p>
          <p><strong>대여 가능:</strong> {findReadOne.is_available ? "가능" : "불가능"}</p>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setOpenOne(false)}
          >
            닫기
          </button>
        </div>
      )}

      {/* 갤러리 추가 form */}
      {isOpenAdd && type === "gallery" && (
        <div className="card p-4 shadow-sm mb-4">
          <h3 className="mb-3">갤러리 추가</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              insert(newGallery, photo); // insert 호출
              setOpenAdd(false);
              setNewGallery({ writer: "", title: "", content: ""});
              setPhoto(null);
            }}
          >
            <div className="mb-3">
              <input
                type="text"
                name="writer"
                className="form-control"
                placeholder="작성자"
                value={newGallery.writer}
                onChange={(e) => setNewGallery({ ...newGallery, writer: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="content"
                className="form-control"
                placeholder="제목"
                value={newGallery.title}
                onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                onChange={(e) => setPhoto(e.target.files[0])} // 선택한 파일 저장
                required
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">등록</button>
            <button type="button" className="btn btn-secondary" onClick={() => setOpenAdd(false)}>취소</button>
          </form>
        </div>
      )}

      {/* 기본 children */}
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
