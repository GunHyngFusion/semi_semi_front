const BookDetailMain = () => {
  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">BookDetailPage</h1>
      <div className="book-info-section bg-white border rounded p-4 d-flex align-items-start">
        <img
          src="https://cdn.pixabay.com/photo/2024/11/08/12/57/cat-9183327_1280.jpg"
          className="book-cover me-4 rounded"
          // Adjusted image size here
          style={{ width: "150px", height: "auto" }}
          alt="Book cover"
        />
        <div className="flex-grow-1 book-meta-data">
          <div className="row mb-2">
            <div className="col-3 col-sm-2 fw-bold text-nowrap">저자사항</div>
            <div className="col-9 col-sm-10">
              에그박사 합작 ; 박송이 글 ; 홍종현 그림
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3 col-sm-2 fw-bold text-nowrap">발행사항</div>
            <div className="col-9 col-sm-10">서울: 아이세움: 미래엔, 2021</div>
          </div>
          {/* 나머지 서지 정보... */}
        </div>
      </div>

      <div className="detailed-info-section bg-white border rounded mt-4 p-4">
        <h3 className="section-title">상세정보</h3>
        <p className="placeholder-text">
          평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
          민주평화통일자문회의를 둘 수 있다. 대법원과 각급법원의 조직은 법률로
          정한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 각급
          선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여
          관계 행정기관에 필요한 지시를 할 수 있다. 대통령은 국가의 안위에
          관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가
          필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는
          명령을 발할 수 있다. 신체장애자 및 질병·노령 기타의 사유로 생활능력이
          없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 한
          회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을
          정하여 계속비로서 국회의 의결을 얻어야 한다. 대한민국은 통일을
          지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고
          이를 추진한다. 선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당
          또는 후보자에게 부담시킬 수 없다.
        </p>
      </div>
    </div>
  );
};

export default BookDetailMain;
