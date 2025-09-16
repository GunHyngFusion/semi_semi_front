import { createBrowserRouter } from "react-router-dom";

import MainPage from "../pages/Main/MainPage";

import AdminPage from "../pages/Admin/AdminPage";

import BookDetailPage from "../pages/Book/BookDetailPage";
import BookFilterPage from "../pages/Book/BookFilterPage";
import BookListPage from "../pages/Book/BookListPage";
import BookSearchPage from "../pages/Book/BookSearchPage";

import CommunityFAQPage from "../pages/Community/CommunityFAQPage";
import CommunityGalleryPage from "../pages/Community/CommunityGalleryPage";
import CommunityNoticePage from "../pages/Community/CommunityNoticePage";
import CommunityQnAPage from "../pages/Community/CommunityQnAPage";

import LibraryInfoGuidePage from "../pages/LibraryInfo/LibraryInfoGuidePage";
import LibraryInfoVisitUsPage from "../pages/LibraryInfo/LibraryInfoVisitUsPage";

import MyPage from "../pages/MyPage/MyPage";
import MyPageModify from "../pages/MyPage/MyPageModify";

import SeatPage from "../pages/Seat/SeatPage";

import LoginPage from "../pages/User/LoginPage";

const root = createBrowserRouter(
	[
        // main
		{
            path:"/",
		    element: (
                <MainPage />
            )
        },

        // admin
        {
            path:"/admin/admin",
		    element: (
                <AdminPage />
            )
        },

        // book
        {
            path:"/book/detail",
		    element: (
                <BookDetailPage />
            )
        },
        {
            path:"/book/filter",
		    element: (
                <BookFilterPage />
            )
        },
        {
            path:"/book/list",
		    element: (
                <BookListPage />
            )
        },
        {
            path:"/book/search",
		    element: (
                <BookSearchPage />
            )
        },

        // Community
        {
            path:"/community/faq",
		    element: (
                <CommunityFAQPage />
            )
        },
        {
            path:"/community/gallery",
		    element: (
                <CommunityGalleryPage />
            )
        },
        {
            path:"/community/notice",
		    element: (
                <CommunityNoticePage />
            )
        },
        {
            path:"/community/qna",
		    element: (
                <CommunityQnAPage />
            )
        },

        // LibraryInfo
        {
            path:"/libaryinfo/guide",
		    element: (
                <LibraryInfoGuidePage />
            )
        },
        {
            path:"/libaryinfo/visitus",
		    element: (
                <LibraryInfoVisitUsPage />
            )
        },

        // mypage
        {
            path:"/mypage/mypage",
		    element: (
                <MyPage />
            )
        },
        {
            path:"/mypage/modify",
		    element: (
                <MyPageModify />
            )
        },

        // seat
        {
            path:"/seat/seat",
		    element: (
                <SeatPage />
            )
        },

        // user
        {
            path:"/user/login",
		    element: (
                <LoginPage />
            )
        },
    ]

);

export default root;