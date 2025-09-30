import axios from "axios";

const readOne = (galleryId) => {
  return axios
    .get(`http://localhost:8080/photogallery/info/${galleryId}`)
    .then((res) => {
      console.log(res);
      return res.data;
    }) // axios 응답 객체에서 data만 반환
    .catch((error) => {
      console.error("API 요청 실패:", error);
      throw error; // 호출한 곳으로 에러 전달
    });
};

const deleteOne = () => {
  console.log("gallery deleteOne");
};

const insert = (newGallery) => {
  const formData = new FormData();
  formData.append("writer", newGallery.writer);
  formData.append("title", newGallery.title);
  formData.append("content", newGallery.content);
  formData.append("photoUrl", "dummy");
  formData.append("photo", newGallery.photo); // File 객체

  console.log(formData);

  return axios
    .post("http://localhost:8080/photogallery/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("업로드 성공:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("업로드 실패:", err);
      throw err;
    });
};

const update = () => {
  console.log("gallery update");
};

const GalleryApi = { readOne, deleteOne, insert, update };
export default GalleryApi;
