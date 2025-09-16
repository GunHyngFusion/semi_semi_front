import React from 'react'
import BookFilterComponent from '../../components/Book/BookFilterComponent'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'

const BookFilterPage = () => {
  return (
    <>
      <Header />
      <h1>BookFilterPage</h1>
      <BookFilterComponent />
      <Footer />
    </>
  )
}

export default BookFilterPage
