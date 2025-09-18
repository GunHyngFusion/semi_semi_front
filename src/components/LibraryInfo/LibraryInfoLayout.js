import React from 'react'
import { Link } from 'react-router-dom';

const LibraryInfoLayout = ({children}) => {
  return (
    <div className="book-detail-page bg-light">
      <div className="container-fluid p-0">
        <div className="row g-0 min-vh-100">
          <div className="col-lg-2 col-md-3 left-panel">
            <h3 className="panel-title"><Link to="/libaryinfo/guide">이용안내</Link></h3>
            <h3 className="panel-title"><Link to="/libaryinfo/visitus">찾아오는 길</Link></h3>
          </div>
          <div className="col-lg-10 col-md-9 main-content p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default LibraryInfoLayout
