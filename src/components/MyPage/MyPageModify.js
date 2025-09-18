const MyPageModify = () => {
  const userInfo = {
    nickname: "유지원",
    phone: "010-1234-1234",
    address: "06234, 서울 강남구 테헤란로 14길 6, 5층",
    roadAddress: "",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* 좌측 사이드 메뉴 */}
        <div className="col-md-3 bg-light border-end p-4">
          <h4 className="mb-4">마이페이지 메뉴</h4>
          <ul className="list-unstyled">
            <li className="mb-3"><a href="#" className="text-decoration-none fw-bold">👤 프로필</a></li>
            <li className="mb-3"><a href="#" className="text-decoration-none">📄 내 정보</a></li>
            <li className="mb-3"><a href="#" className="text-decoration-none">🔒 비밀번호 변경</a></li>
            <li className="mb-3"><a href="#" className="text-decoration-none text-danger">🚫 회원 탈퇴</a></li>
          </ul>
        </div>

        {/* 우측 정보 영역 */}
        <div className="col-md-9 p-4">
          <h2 className="mb-4">📄 내 정보</h2>
          <div className="bg-white border rounded p-4">
            <div className="mb-3">
              <label className="form-label fw-bold">닉네임</label>
              <input type="text" className="form-control" defaultValue={userInfo.nickname} />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">전화번호</label>
              <input type="text" className="form-control" defaultValue={userInfo.phone} />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">주소</label>
              <input type="text" className="form-control" defaultValue={userInfo.address} />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">도로명/지번 주소</label>
              <input type="text" className="form-control" defaultValue={userInfo.roadAddress} />
            </div>
            <button className="btn btn-primary">수정하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageModify;