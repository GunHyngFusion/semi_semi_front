const readOne = () => {
  console.log("library readOne");
};
const deleteOne = () => {
  console.log("library deleteOne");
};
const insert = () => {
  console.log("library insert");
};
const update = () => {
  console.log("library update");
};

const LibraryApi = { readOne, deleteOne, insert, update };
export default LibraryApi;