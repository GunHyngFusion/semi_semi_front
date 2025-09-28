import { useEffect, useRef } from "react";

// window 객체에서 kakao 객체를 가져옵니다.
// @ts-ignore
const { kakao } = window; 

const LibraryIngoVisitUs = () => {
    // 지도를 담을 div의 참조(Ref)를 생성합니다.
    const mapContainer = useRef(null);

    // 지도를 생성하는 핵심 로직 (컴포넌트가 마운트될 때 실행)
    useEffect(() => {
        // kakao.maps 객체가 전역에 존재하고, mapContainer가 연결되었는지 확인
        if (kakao && kakao.maps && mapContainer.current) {
            
            // ⭐️ kakao.maps.load()를 사용하여 API가 완전히 준비되었을 때만 지도를 생성하도록 보장
            kakao.maps.load(() => {
                const mapOption = {
                    // 지도 중심 좌표 (실제 도서관 좌표로 변경해주세요!)
                     center: new kakao.maps.LatLng(37.40423645594882, 127.13482438476035),
                    level: 3
                };

                // 지도 객체 생성
                new kakao.maps.Map(mapContainer.current, mapOption);
                
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