import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import AdminComponent from '../../components/Admin/AdminComponent'

const AdminPage = () => {
  return (
    <>
      <Header />
        <h1>AdminPage</h1>
        <AdminComponent />
      <Footer />
    </>
  )
}

export default AdminPage
