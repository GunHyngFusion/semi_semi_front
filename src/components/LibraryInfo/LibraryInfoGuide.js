const LibraryInfoGuide = () => {
  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">도서관 이용 안내</h1>

      <div className="usage-hours-section bg-white border rounded p-4 mb-4">
        <h3 className="section-title">📚 이용시간</h3>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>구분</th>
              <th>평일</th>
              <th>토요일</th>
              <th>일요일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>일반열람실</td>
              <td>07:00~23:00</td>
              <td>07:00~23:00</td>
              <td>07:00~23:00</td>
            </tr>
            <tr>
              <td>종합자료실</td>
              <td>09:00~22:00</td>
              <td>09:00~18:00</td>
              <td>휴관</td>
            </tr>
            <tr>
              <td>디지털자료실</td>
              <td>09:00~18:00</td>
              <td>09:00~18:00</td>
              <td>휴관</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="holiday-info-section bg-white border rounded p-4">
        <h3 className="section-title">📅 휴관일 안내</h3>
        <ul className="list-unstyled">
          <li>• 매월 첫째·셋째 월요일 및 법정공휴일(신정, 설날, 추석) 휴관</li>
          <li>• 둘째·넷째 월요일은 일반열람실만 운영 (07:00~23:00)</li>
          <li>• 종합자료실 및 디지털자료실은 둘째·넷째 월요일 휴관</li>
          <li>• 점검 및 보수 등 기타 사유로 임시 휴관 가능</li>
        </ul>
      </div>
    </div>
  );
};

export default LibraryInfoGuide;