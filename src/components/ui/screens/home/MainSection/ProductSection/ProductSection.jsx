import { useState } from 'react'
import PropTypes from "prop-types"
import Categories from './Categories/Categories'
import BookSection from './BookSection/BookSection'
import styles from './ProductSection.module.css'

function ProductSection({getBookNum}) {
    const [category, setCategory] = useState('')
    const [defaultCategory, setDefaultCategory] = useState('')

    const selectedCategory = (data) => {
        setCategory(data)
    }
    const getDefaultCategory = (data) => {
        setDefaultCategory(data)
    }

    return (
        <div className={styles.productSection}>
            <Categories
                select={selectedCategory}
                defaultCategory={defaultCategory}
            />
            <BookSection selected={category} defaultCategory={getDefaultCategory} getBookNum={getBookNum}/>
        </div>
    )
}

ProductSection.propTypes = {
    getBookNum: PropTypes.func.isRequired
}


export default ProductSection
