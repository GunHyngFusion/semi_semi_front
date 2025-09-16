import React from 'react'
import BookListComponent from '../../components/Book/BookListComponent'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'

const BookListPage = () => {
  return (
    <>
      <Header />
      <h1>BookListPage</h1>
      <BookListComponent />
    <Footer />
    </>
  )
}

export default BookListPage
