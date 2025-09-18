const CommunityGallery = () => {
  const events = [
    { title: "제11회 성산 어린이 독서대회", date: "2023-10-11" },
    { title: "2023년 성산 어린이 글짓기·그림대회 시상식", date: "2023-12-01" },
    { title: "제11회 성산 어린이 그림대회", date: "2023-10-11" },
    { title: "제11회 성산 어린이 글짓기 대회", date: "2023-10-13" },
    { title: "제10회 독서토론대회", date: "2023-10-13" },
    { title: "제9회 독서토론대회", date: "2022-09-20" },
    { title: "제10회 성산 어린이 글짓기 대회", date: "2023-10-13" },
    { title: "제10회 성산 어린이 그림대회", date: "2023-10-13" },
    { title: "제9회 성산 어린이 그림대회", date: "2022-09-20" },
  ];

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">🎨 어린이 행사 갤러리</h1>

      <div className="row">
        {events.map((event, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg"
                className="card-img-top"
                alt={`${event.title} 이미지`}
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text text-muted">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

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
  );
};

export default CommunityGallery;