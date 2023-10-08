import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import starRating from '../../../../../../../utils/starRating'
import styles from './BookItem.module.css'

const bookShape = PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
    inBasket: PropTypes.bool,
    id: PropTypes.string,
})

function BookItem({ book, updateAllBooks }) {
    const buttonRef = useRef(null)
    const [inBasket, setInBasket] = useState(book.inBasket)
    const bookReviews = book.reviews ? `${book.reviews} reviews` : 'no reviews'
    const bookRating = book.rating
    const price = book.price ? `${book.price} $` : 'no price'

    const addInBasket = () => {
        setInBasket(!inBasket);
        updateAllBooks(book.id, !inBasket);
      };

      
    

    return (
        <div className={styles.bookItem}>
            <div className={styles.bookImg}>
                <img src={book.imgUrl} alt={book.title} />
            </div>
            <div className={styles.bookInfo}>
                <h4 className={styles.bookAuthor}>{book.authors}</h4>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <div className={styles.bookEvaluation}>
                    <div className={styles.bookRating}>
                        {starRating(bookRating)}
                    </div>
                    <div className={styles.bookReviews}>{bookReviews}</div>
                </div>
                <div className={styles.bookDescription}>
                    <p>{book.description}</p>
                </div>
                <div className={styles.bookPrice}>
                    <span>{price}</span>
                </div>
                <button
                    ref={buttonRef}
                    className={`${styles.bookButton} ${
                        inBasket ? styles.bought : ''
                    }`}
                    type="submit"
                    onClick={addInBasket}
                >
                    {inBasket ? 'in the cart' : 'buy now'}
                </button>
            </div>
        </div>
    )
}

BookItem.propTypes = {
    book: bookShape.isRequired,
    updateAllBooks: PropTypes.func.isRequired,
}

export default BookItem
