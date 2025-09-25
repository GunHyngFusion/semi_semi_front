import React from 'react'
import CommunityLayout from './CommunityLayout';
import CommunityNoticeDetail from './CommunityNoticeDetail';

const CommunityNoticeDetailComponent = () => {
  return <CommunityLayout children={<CommunityNoticeDetail />} />;
}

export default CommunityNoticeDetailComponent
