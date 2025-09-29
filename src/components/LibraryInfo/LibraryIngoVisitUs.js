import { useEffect, useRef } from "react";

// window 객체에서 kakao 객체를 가져옵니다.
// @ts-ignore
const { kakao } = window; 

const LibraryIngoVisitUs = () => {
    // 지도를 담을 div의 참조(Ref)를 생성합니다.
    const mapContainer = useRef(null);
    
    // 도서관의 정확한 좌표를 상수로 정의
    const LIBRARY_LAT = 37.40423645594882;
    const LIBRARY_LNG = 127.13482438476035;

    // 지도를 생성하는 핵심 로직 (컴포넌트가 마운트될 때 실행)
    useEffect(() => {
        if (kakao && kakao.maps && mapContainer.current) {
            
            // kakao.maps.load()를 사용하여 API가 완전히 준비되었을 때만 지도를 생성하도록 보장
            kakao.maps.load(() => {
                
                const mapOption = {
                    center: new kakao.maps.LatLng(LIBRARY_LAT, LIBRARY_LNG),
                    level: 3
                };

                // 💡 수정: 지도 객체를 'map' 변수에 할당합니다.
                const map = new kakao.maps.Map(mapContainer.current, mapOption);
                
                // 마커와 인포윈도우를 표시할 위치 객체 생성
                const markerPosition = new kakao.maps.LatLng(LIBRARY_LAT, LIBRARY_LNG);
                
                // 마커 생성
                const marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                
                // 💡 수정: 생성된 마커를 'map' 객체에 올립니다.
                marker.setMap(map); 

                // --- 🚩 인포윈도우 추가 로직 (선택 사항) ---

                // 인포윈도우에 표시할 내용 (도서관 이름)
                const iwContent = '<div style="padding:5px; font-weight:bold;">[작은 그린 도서관]</div>';
                
                // 인포윈도우 생성
                const infowindow = new kakao.maps.InfoWindow({
                    content : iwContent,
                    removable : true // 닫기 버튼 표시
                });

                // 지도에 인포윈도우 표시 (마커와 함께)
                infowindow.open(map, marker);

                // --- 🚩 이벤트 리스너 추가 (선택 사항) ---

                // 마커를 클릭하면 인포윈도우가 열리도록 이벤트 추가
                kakao.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);  
                });
                
                console.log("✅ 카카오맵 로딩 완료 및 지도 생성 성공!");
            });
        } else {
            console.error("❌ 카카오맵 API 스크립트가 아직 로드되지 않았습니다. public/index.html을 확인하세요.");
        }
    // 의존성 배열을 비워 최초 마운트 시 한 번만 실행되도록 유지합니다.
    }, []); 

    // 컴포넌트 렌더링
    return (
        <div className="col-lg-10 col-md-9 main-content p-4">
            
            <h1 className="main-title">📍 도서관 위치 및 교통 안내</h1>

            <div className="map-section bg-white border rounded p-4 mb-4">
                <h3 className="section-title">🗺️ 지도</h3>
                
                {/* 지도를 띄울 div에 ref 연결 및 크기 지정 */}
                <div 
                    ref={mapContainer} 
                    style={{ width: '100%', height: '400px', margin: '0 auto' }}
                >
                    {/* 지도가 여기에 그려집니다. */}
                </div>
            </div>
            
            {/* 맵 외의 정보 (기존 JSX 유지) */}
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