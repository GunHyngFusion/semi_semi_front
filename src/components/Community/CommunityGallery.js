import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link를 사용하여 상세 페이지로 이동

const CommunityGallery = () => {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/photogallery/list"
        );
        console.log(data);
        setGalleryList(data);
      } catch (error) {
        console.log(error);
        alert('갤러리 목록을 불러오는 중 오류가 발생했습니다.'); // 오류 메시지 추가
      }
    };
    getList();
  }, []);

  return (
    <div className="container mx-auto my-8 p-6 max-w-6xl bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-4">
        🎨 어린이 행사 갤러리
      </h1>

      {/* 갤러리 목록: Grid 시스템 사용 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryList.map((event) => (
          <div key={event.galleryId} className="group"> {/* Link로 감싸기 위해 key를 여기에 부여 */}
            <Link to={`/community/gallery/${event.galleryId}`} className="block">
              <div className="card shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden h-full flex flex-col">
                {/* 이미지 영역: 16:9 비율 고정 */}
                <div className="relative w-full pb-[56.25%] overflow-hidden"> {/* 16:9 비율 (9 / 16 * 100 = 56.25) */}
                  <img
                    src={`http://localhost:8080${event.photoUrl}`}
                    alt={`${event.title} 이미지`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* 카드 본문 */}
                <div className="card-body p-4 flex-grow">
                  <h5 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h5>
                  <p className="text-sm text-gray-500">
                    {event.createdAt ? new Date(event.createdAt).toLocaleDateString() : '날짜 미정'}
                  </p>
                  {/* <p className="text-sm text-gray-600 mt-2 line-clamp-2">{event.content}</p> {/* 내용도 필요하면 표시 */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* 페이지네이션 (기능 구현은 별도로 필요합니다) */}
      <nav className="mt-10">
        <ul className="flex justify-center space-x-2">
          <li className="px-4 py-2 bg-blue-600 text-white rounded-md">
            <span className="page-link">1</span>
          </li>
          <li className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
            <Link to="#" className="page-link">2</Link>
          </li>
          <li className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
            <Link to="#" className="page-link">3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CommunityGallery;