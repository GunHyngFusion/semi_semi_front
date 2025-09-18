const CommunityNotice = () => {
  const notices = [
    {
      number: 1,
      category: "공지",
      title: "2023년 하반기 도서관 운영시간 변경 안내",
      date: "2023-09-01",
      attachment: true,
      views: 1523,
    },
    {
      number: 2,
      category: "학술",
      title: "2023년 독서토론대회 참가자 모집",
      date: "2023-08-15",
      attachment: false,
      views: 987,
    },
    {
      number: 3,
      category: "운영",
      title: "도서관 시스템 점검 안내 (9/20)",
      date: "2023-08-01",
      attachment: true,
      views: 2045,
    },
    {
      number: 4,
      category: "공지",
      title: "2022년 성산 어린이 그림대회 결과 발표",
      date: "2022-04-11",
      attachment: false,
      views: 312,
    },
  ];

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">📢 공지사항</h1>

      <div className="notice-section bg-white border rounded p-4">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-light">
            <tr>
              <th>번호</th>
              <th>구분</th>
              <th>제목</th>
              <th>작성일</th>
              <th>첨부</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.number}>
                <td>{notice.number}</td>
                <td>{notice.category}</td>
                <td className="text-start">{notice.title}</td>
                <td>{notice.date}</td>
                <td>{notice.attachment ? "📎" : "-"}</td>
                <td>{notice.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommunityNotice;