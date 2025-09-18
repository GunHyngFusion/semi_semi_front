const Main = () => {
  const recommendedBooks = [
    "추천도서1",
    "추천도서2",
    "추천도서3",
    "추천도서4",
    "추천도서5",
  ];

  const notices = [
    "📌 휴관일 안내: 매월 첫째·셋째 월요일 및 법정공휴일 휴관",
    "🎨 문화프로그램 진행: 어린이 그림대회 10월 개최 예정",
  ];

  const qnaItems = [
    "🔒 비밀번호를 잊었어요. 어떻게 재설정하나요?",
    "📕 대출은 몇 권까지 가능한가요?",
    "🌐 홈페이지 오류가 발생했어요. 어디에 문의하나요?",
  ];

  return (
    <div className="container py-5">
      {/* 상단 환영 메시지 */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">🎉 작은 그림 도서관에 오신 것을 환영합니다!</h1>
      </div>

      {/* 배경 배너 */}
      <div
        className="mb-5 text-white d-flex align-items-center justify-content-center rounded shadow"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        <h2 className="fw-bold bg-dark bg-opacity-50 px-4 py-2 rounded">
          📚 가을 독서 캠페인 진행중!
        </h2>
      </div>

      {/* 이달의 추천도서 */}
      <div className="mb-5">
        <h2 className="mb-4">📚 이달의 추천도서</h2>
        <div className="row">
          {recommendedBooks.map((book, index) => (
            <div key={index} className="col-md-2 col-6 mb-4">
              <div className="card h-100 text-center">
                <img
                  src={`https://via.placeholder.com/150x200?text=${book}`}
                  alt={book}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{book}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 공지사항 & Q&A */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="bg-white border rounded p-4 h-100">
            <h3 className="mb-3">📢 공지사항</h3>
            <ul className="list-unstyled">
              {notices.map((notice, index) => (
                <li key={index} className="mb-2">{notice}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="bg-white border rounded p-4 h-100">
            <h3 className="mb-3">❓ Q&A</h3>
            <ul className="list-unstyled">
              {qnaItems.map((qna, index) => (
                <li key={index} className="mb-2">{qna}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;