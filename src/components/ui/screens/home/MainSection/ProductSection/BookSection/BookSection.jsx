import { useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types"
import BookItem from './BookItem/BookItem'
import styles from './BookSection.module.css'

// const API_KEY = 'AIzaSyAcTiKfk8DoR6ntXIMbv5hp-dptOuitPWE'

function BookSection({ selectedCategory }) {
    const BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?q=${selectedCategory}&startIndex=0&maxResults=6&key=AIzaSyAcTiKfk8DoR6ntXIMbv5hp-dptOuitPWE`

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(BOOKS_URL)
            .then((response) => response.json())
            .then((data) => {
                const fetchedBooks = data.items
                setBooks(fetchedBooks)
            })
            .catch((error) => console.error(error))
    }, [])

    return (
        <div className={styles.bookSection}>
            {books.map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    )
}

BookSection.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
}

export default BookSection
