import React from "react";
import AdminLayout from "./AdminLayout";
import AdminBook from "./AdminBook";
import AdminCommuniyFAQ from "./AdminCommuniyFAQ";
import { BookApi } from "../../apis/book/bookApi";
import { CommunityApi } from "../../apis/community/communityApi";
import { LibraryApi } from "../../apis/library/libraryApi";

const AdminComponent = () => {
  const api = null;
  return (
    <div>
      <AdminLayout children={<AdminBook />} funcs={BookApi} />
      <AdminLayout children={<AdminCommuniyFAQ />} funcs={CommunityApi} />
      <AdminLayout children={<AdminCommuniyFAQ />} funcs={LibraryApi} />
      <AdminLayout children={<AdminCommuniyFAQ />} funcs={MyPageApi} />
    </div>
  );
};

export default AdminComponent;
