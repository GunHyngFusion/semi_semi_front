import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import CommunityNoticeDetail from '../../components/Community/CommunityNoticeDetail'
import CommunityNoticeDetailComponent from '../../components/Community/CommunityNoticeDetailComponent'

const CommunityNoticeDetailPage = () => {

   return (
        <>
      <Header />
      <h1>CommunityNoticePage</h1>
      <CommunityNoticeDetailComponent />
      <Footer />
    </>
  )
  
}

export default CommunityNoticeDetailPage