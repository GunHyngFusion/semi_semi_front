import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AdminSelectedContext from "./AdminSelectContext";

const AdminCommuniyGallery = () => {
  const [galleryList, setGalleryList] = useState([]);
  const { selectedCommunityGalleryId, setSelectedCommunityGalleryId } =
    useContext(AdminSelectedContext);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/photogallery/list"
        );
        setGalleryList(data);
      } catch (error) {
        console.error(error);
        alert("갤러리 목록을 불러오는 중 오류가 발생했습니다.");
      }
    };
    getList();
  }, []);

  const handleSelect = (id) => {
    setSelectedCommunityGalleryId(id);
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover text-center align-middle">
        <thead className="table-light">
          <tr>
            <th>사진</th>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {galleryList.map((event, index) => (
            <tr key={index}>
              {/* no use. but 언젠간 ... */}
              <td>
                <input
                  type="checkbox"
                  checked={selectedCommunityGalleryId === event.galleryId}
                  onChange={() => handleSelect(event.galleryId)}
                />
              </td>
              <td>
                <img
                  src={`http://localhost:8080${event.photoUrl}`}
                  alt={event.title}
                  style={{
                    width: "80px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </td>
              <td>{event.title}</td>
              <td>
                {event.createdAt
                  ? new Date(event.createdAt).toLocaleDateString()
                  : "날짜 미정"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCommuniyGallery;
