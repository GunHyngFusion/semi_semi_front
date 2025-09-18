import React from 'react'
import CommunityLayout from './CommunityLayout';
import CommunityGallery from './CommunityGallery';

const CommunityGalleryComponent = () => {
  return <CommunityLayout children={<CommunityGallery />} />;
}

export default CommunityGalleryComponent
