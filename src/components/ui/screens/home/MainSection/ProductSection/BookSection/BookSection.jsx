import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import BookItem from './BookItem/BookItem'
import allBooksData from '../../../../../../utils/books.data'
import styles from './BookSection.module.css'

function BookSection({ selected, defaultCategory, getBookNum }) {
    const [startIndex, setStartIndex] = useState(0)
    const [category, setCategory] = useState('architecture')
    const [allBooks, setAllBooks] = useState(allBooksData)

    useEffect(() => {
        const fetchData = async () => {
            const BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?q=${category}&startIndex=${startIndex}&maxResults=6&key=AIzaSyB9B8IgCFuZijXjUL_hhSNLiByavLQeC5A`
            const response = await fetch(BOOKS_URL)
            const data = await response.json()
            const bookItems = data.items
            bookItems.forEach((book) => {
                const updatedBookData = {
                    imgUrl: book.volumeInfo.imageLinks.thumbnail,
                    authors: book.volumeInfo.authors,
                    title: book.volumeInfo.title,
                    rating: book.volumeInfo.averageRating,
                    reviews: book.volumeInfo.ratingsCount,
                    description: book.volumeInfo.description,
                    inBasket: false,
                    id: uuidv4(),
                }
                setAllBooks((prevBooks) => [...prevBooks, updatedBookData])
            })
        }
        fetchData()
    }, [startIndex, category])

    const loadMoreBooks = async () => {
        const newStartIndex = startIndex + 6
        setStartIndex(newStartIndex)
        const BOOKS_URL = `https://www.googleapis.com/books/v1/volumes?q=${category}&startIndex=${newStartIndex}&maxResults=6&key=AIzaSyB9B8IgCFuZijXjUL_hhSNLiByavLQeC5A`
        const response = await fetch(BOOKS_URL)
        const data = await response.json()
        const bookItems = data.items
        bookItems.forEach((book) => {
            const updatedBookData = {
                imgUrl: book.volumeInfo.imageLinks.thumbnail,
                authors: book.volumeInfo.authors,
                title: book.volumeInfo.title,
                rating: book.volumeInfo.averageRating,
                reviews: book.volumeInfo.ratingsCount,
                description: book.volumeInfo.description,
                inBasket: false,
                id: book.id,
            }
            setAllBooks((prevBooks) => [...prevBooks, updatedBookData])
        })
    }

    const resetBooks = () => {
        setAllBooks([])
        setStartIndex(0)
    }

    useEffect(() => {
        if (selected) {
            setCategory(selected)
            resetBooks()
        }
    }, [selected])
    useEffect(() => {
        defaultCategory(category)
    }, [category, defaultCategory])

    const updateAllBooks = (id, inBasket) => {
        setAllBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id ? { ...book, inBasket } : book
            )
        )
    }

    useEffect(() => {
        const inBasketCount = allBooks.filter((item) => item.inBasket).length
        getBookNum(inBasketCount)
    }, [allBooks, getBookNum])

    return (
        <div className={styles.bookSectionBody}>
            <div className={styles.bookSection}>
                {allBooks.map((book) => (
                    <BookItem
                        key={uuidv4()}
                        book={book}
                        allBooks={allBooks}
                        updateAllBooks={updateAllBooks}
                    />
                ))}
            </div>
            <button
                className={styles.loadMoreBooks}
                type="submit"
                onClick={loadMoreBooks}
            >
                Load More
            </button>
        </div>
    )
}

BookSection.propTypes = {
    selected: PropTypes.string.isRequired,
    defaultCategory: PropTypes.func.isRequired,
    getBookNum: PropTypes.func.isRequired,
}

export default BookSection
