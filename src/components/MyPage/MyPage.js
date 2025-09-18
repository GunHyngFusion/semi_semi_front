const MyPage = () => {
  const member = {
    name: "keonvin",
    email: "keonvin@example.com",
    role: "그룹관리자",
    joinDate: "2023-04-01",
    lastLogin: "2025-09-18 22:45:12",
    status: "활동중",
  };

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">👤 회원 정보</h1>

      <div className="bg-white border rounded p-4 mb-4">
        <h5 className="fw-bold mb-3">📌 기본 정보</h5>
        <ul className="list-unstyled">
          <li><strong>이름:</strong> {member.name}</li>
          <li><strong>이메일:</strong> {member.email}</li>
          <li><strong>회원구분:</strong> {member.role}</li>
          <li><strong>가입일:</strong> {member.joinDate}</li>
          <li><strong>최근 로그인:</strong> {member.lastLogin}</li>
          <li><strong>상태:</strong> {member.status}</li>
          <li><button>수정</button></li>
        </ul>
      </div>
    </div>
  );
};

export default MyPage;