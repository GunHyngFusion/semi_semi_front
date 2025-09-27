import React, { useState } from 'react';
import AdminLayout from "./AdminLayout";
import AdminBook from "./AdminBook";
import AdminCommuniyGallery from './AdminCommuniyGallery';

import BookApi from "../../apis/book/BookApi";
import GalleryApi from "../../apis/community/GalleryApi";
import AdminSelectedContext from './AdminSelectContext';


const AdminComponent = () => {
    const [selectedBookIsbn, setSelectedBookIsbn] = useState("none");
    const [selectedCommunityId, setSelectedCommunityId] = useState("none");

    return (
        <AdminSelectedContext.Provider value={{selectedBookIsbn,setSelectedBookIsbn, selectedCommunityId, setSelectedCommunityId }}>
            <AdminLayout children={<AdminBook />} funcs={BookApi} id={selectedBookIsbn} type={"book"}/>
            <AdminLayout children={<AdminCommuniyGallery />} funcs={GalleryApi} type={"gallery"} />
        </AdminSelectedContext.Provider>
    );
};

export default AdminComponent;