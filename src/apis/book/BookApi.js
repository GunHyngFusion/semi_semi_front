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
  console.log("book deleteOne");
};
const insert = () => {
  console.log("book insert");
};
const update = () => {
  console.log("book update");
};

const BookApi = { readOne, deleteOne, insert, update };
export default BookApi;
