// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import styles from './BookItem.module.css'

const bookShape = PropTypes.shape({
    volumeInfo: PropTypes.shape({
        imageLinks: PropTypes.shape({
            thumbnail: PropTypes.string.isRequired,
        }).isRequired,
        authors: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        ratingsCount: PropTypes.number,
        description: PropTypes.string.isRequired,
    }).isRequired,

    saleInfo: PropTypes.shape({
        listPrice: PropTypes.shape({
            amount: PropTypes.number,
        }),
    }).isRequired,
})

function BookItem({ book }) {
    const rating = book.volumeInfo.ratingsCount
        ? `${book.volumeInfo.ratingsCount} reviews`
        : 'no reviews'
    const price = book.saleInfo.listPrice
        ? `${book.saleInfo.listPrice.amount} $`
        : 'no price'

    return (
        <div className={styles.bookItem}>
            <div className={styles.bookImg}>
                <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                />
            </div>
            <div className={styles.bookInfo}>
                <h4 className={styles.bookAuthor}>{book.volumeInfo.authors}</h4>
                <h3 className={styles.bookTitle}>{book.volumeInfo.title}</h3>
                <div className={styles.bookEvaluation}>
                    <div>rating</div>
                    <div className={styles.bookReviews}>{rating}</div>
                </div>
                <div className={styles.bookDescription}>
                    <p>{book.volumeInfo.description}</p>
                </div>
                <div className={styles.bookPrice}>
                    <span>{price}</span>
                </div>
                <button className={styles.bookButton} type="submit">
                    buy now
                </button>
            </div>
        </div>
    )
}

BookItem.propTypes = {
    book: bookShape.isRequired,
}

export default BookItem
