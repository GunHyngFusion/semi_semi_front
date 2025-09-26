import React, { useState } from "react";

const AdminLayout = ({ children, funcs }) => {
  const { readOne, deleteOne, insert, update } = funcs;
  const [selected, setSelected] = useState(""); // 선택된 오브젝트 id

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>

      {/* 버튼들 */}
      <div className="btn-group mb-4 w-100">
        <button onClick={() => readOne()} className="btn btn-primary w-25">
          1개 읽기
        </button>
        <button onClick={() => deleteOne()} className="btn btn-danger w-25">
          삭제
        </button>
        <button onClick={() => insert()} className="btn btn-success w-25">
          추가
        </button>
        <button onClick={() => update()} className="btn btn-warning w-25">
          수정
        </button>
      </div>

      {/* 전체 읽기 (item-list) */}
      <div
        className="item-list mb-5 p-4 border w-100"
        style={{ minHeight: "300px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
