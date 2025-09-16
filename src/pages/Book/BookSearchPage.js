import React from 'react'
import BookSearchComponent from '../../components/Book/BookSearchComponent'
import Footer from '../../components/Layout/Footer'
import Header from '../../components/Layout/Header'

const BookSearchPage = () => {
  return (
      <>
      <Header />
      <h1>BookSearchPage</h1>
      <BookSearchComponent />
      <Footer />
    </>
  )
}

export default BookSearchPage
