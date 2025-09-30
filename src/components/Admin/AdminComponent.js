import React, { useState } from "react";
import AdminLayout from "./AdminLayout";
import AdminBook from "./AdminBook";
import AdminCommuniyGallery from "./AdminCommuniyGallery";

import BookApi from "../../apis/book/BookApi";
import GalleryApi from "../../apis/community/GalleryApi";
import AdminSelectedContext from "./AdminSelectContext";

const AdminComponent = () => {
  const [selectedBookIsbn, setSelectedBookIsbn] = useState("none");
  const [selectedCommunityGalleryId, setSelectedCommunityGalleryId] =
    useState("none");

  return (
    <div>
      <AdminSelectedContext.Provider
        value={{ selectedBookIsbn, setSelectedBookIsbn }}
      >
        <AdminLayout
          children={<AdminBook />}
          funcs={BookApi}
          id={selectedBookIsbn}
          type="book"
        />
      </AdminSelectedContext.Provider>

      <AdminSelectedContext.Provider
        value={{ selectedCommunityGalleryId, setSelectedCommunityGalleryId }}
      >
        <AdminLayout
          children={<AdminCommuniyGallery />}
          funcs={GalleryApi}
          id={selectedCommunityGalleryId}
          type="gallery"
        />
      </AdminSelectedContext.Provider>
    </div>
  );
};

export default AdminComponent;
