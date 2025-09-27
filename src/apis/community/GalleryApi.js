import axios from "axios";

const readOne = (bookIsbn) => {
  return axios
    .get(`http://localhost:8080/book/${bookIsbn}`)
    .then((res) => res.data) // axios 응답 객체에서 data만 반환
    .catch((error) => {
      console.error("API 요청 실패:", error);
      throw error; // 호출한 곳으로 에러 전달
    });
};

const deleteOne = () => {
  console.log("gallery deleteOne");
};
const insert = (newGallery, photo) => {
  if (!photo) {
    console.error("파일이 선택되지 않았습니다.");
    return;
  }

  const formData = new FormData();
  formData.append("file", photo);       // 파일
  formData.append("gallery", JSON.stringify(newGallery)); // DTO는 JSON 문자열로 전송

  return axios
    .post("http://localhost:8080/photogallery/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
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
