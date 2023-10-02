import Categories from './Categories/Categories'
import BookSection from './BookSection/BookSection'
import styles from "./ProductSection.module.css"

function ProductSection() {
    return (
        <div className={styles.productSection}>
            <Categories />
            <BookSection />
        </div>
    )
}

export default ProductSection
