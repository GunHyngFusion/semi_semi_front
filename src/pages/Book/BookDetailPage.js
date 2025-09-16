import React from 'react'
import BookDetailComponent from '../../components/Book/BookDetailComponent'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'

const BookDetailPage = () => {
  return (
    <>
      <Header />
        <h1>BookDetailPage</h1>
        <BookDetailComponent />
      <Footer />
    </>
  )
  
}

export default BookDetailPage
