const BookLayout = ({ children }) => {
  return (
    <div className="book-detail-page bg-light">
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <div className="col-lg-2 col-md-3 left-panel">
            <h3 className="panel-title">추천도서</h3>
            <h3 className="panel-title">취향도서</h3>
          </div>
          {/* children을 col 클래스를 가진 div로 감쌉니다. */}
          <div className="col-lg-10 col-md-9 main-content p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default BookLayout;
