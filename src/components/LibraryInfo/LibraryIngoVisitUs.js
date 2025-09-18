const LibraryIngoVisitUs = () => {
  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">📍 도서관 위치 및 교통 안내</h1>

      <div className="map-section bg-white border rounded p-4 mb-4">
        <h3 className="section-title">🗺️ 지도</h3>
        <img
          src="https://via.placeholder.com/600x300?text=Library+Map"
          alt="도서관 위치 지도"
          className="img-fluid rounded"
        />
      </div>

      <div className="address-section bg-white border rounded p-4 mb-4">
        <h3 className="section-title">🏢 주소</h3>
        <p className="mb-0">성남시 분당구 판교로 546 (야탑동 610번지)</p>
      </div>

      <div className="transport-section bg-white border rounded p-4 mb-4">
        <h3 className="section-title">🚉 교통편</h3>
        <ul className="list-unstyled">
          <li>• 야탑역 4번출구, 모란역 6번출구 → 60번 버스 (중앙도서관 하차)</li>
          <li>• 모란역 5번출구 → 33번 버스 (단대앞중학교, 도서관사업소 하차)</li>
          <li>• 33-1번, 8번, 8-1번, 82번 → 단대앞중학교 하차</li>
        </ul>
      </div>

      <div className="parking-section bg-white border rounded p-4">
        <h3 className="section-title">🅿️ 주차장 이용안내</h3>
        <ul className="list-unstyled">
          <li>• 운영시간: 06:00 ~ 22:00</li>
          <li>• 요금: 도서관 이용 시 2시간 무료 (1일 초과 입차 불가)</li>
          <li>• 주차장이 혼잡하므로 가급적 대중교통 이용 권장</li>
        </ul>
      </div>
    </div>
  );
};

export default LibraryIngoVisitUs;