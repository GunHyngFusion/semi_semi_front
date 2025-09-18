import React from 'react'
import CommunityLayout from './CommunityLayout';
import CommunityNotice from './CommunityNotice';

const CommunityNoticeComponent = () => {
  return <CommunityLayout children={<CommunityNotice />} />;
}

export default CommunityNoticeComponent
