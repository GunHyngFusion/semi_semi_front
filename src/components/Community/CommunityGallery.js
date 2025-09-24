import axios from "axios";
import { useEffect, useState } from "react";

const CommunityGallery = () => {
  const [galleryList, setGalleryList] = useState([]);
  useEffect(() => {
    try {
      const getList = async () => {
        const { data } = await axios.get(
          "http://localhost:8080/photogallery/list"
        );
        console.log(data);
        setGalleryList(data);
      };
      getList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // content , createAt, galleryId, photoUrl, title, writer

  return (
    <div className="col-lg-10 col-md-9 main-content p-4">
      <h1 className="main-title">🎨 어린이 행사 갤러리</h1>

      <div className="row">
        {galleryList.map((event, index) => (
          <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm">
              {/* 이미지 비율을 유지하도록 설정 */}
              <div>
                <img
                  src={`http://localhost:8080${event.photoUrl}`}
                  className="card-img-top w-100 h-100"
                  alt={`${event.title} 이미지`}
                  style={{ objectFit: "cover" }} // 비율 유지하면서 잘리지 않도록 설정
                />
              </div>

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
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CommunityGallery;
