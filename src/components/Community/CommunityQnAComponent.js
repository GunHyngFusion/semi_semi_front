import React from 'react'
import CommunityLayout from './CommunityLayout';
import CommunityQnA from './CommunityQnA';

const CommunityQnAComponent = () => {
  return <CommunityLayout children={<CommunityQnA />} />;
}

export default CommunityQnAComponent
