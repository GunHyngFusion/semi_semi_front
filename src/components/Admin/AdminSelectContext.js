import {createContext} from "react";

const AdminSelectedContext = createContext({
  selectedBookIsbn: "none",
  setSelectedBookIsbn: () => {},
  selectedCommunityId: "none",
  setSelectedCommunityId: () => {},
});

export default AdminSelectedContext;