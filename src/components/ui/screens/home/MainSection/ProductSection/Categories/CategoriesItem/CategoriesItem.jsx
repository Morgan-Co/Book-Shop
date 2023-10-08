import { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './CategoriesItem.module.css'

function CategoriesItem({ title, select, defaultCategory }) {
    const liRef = useRef(null)
    const [selectedCategory, setSelectedCategory] = useState('')

    useEffect(() => {
        select(selectedCategory)
    }, [selectedCategory, select])

    function addBulletClass() {
        const listItems = document.querySelectorAll(`.${styles.liItem}`)
        listItems.forEach((item) => {
            if (item === liRef.current) {
                item.classList.add('bullet')
            } else {
                item.classList.remove('bullet')
            }
        })
    }
    useEffect(() => {
        const listItems = document.querySelectorAll(`.${styles.liItem}`)
        listItems.forEach((item) => {
            if (item.innerText.toLowerCase() === defaultCategory) {
                item.classList.add("bullet")
            }
        })
    }, [defaultCategory])

    const handleClick = (e) => {
        e.preventDefault()
        addBulletClass()
        setSelectedCategory(title)
    }

    return (
        <li ref={liRef} className={styles.liItem}>
            <a href="/" onClick={handleClick}>
                {title}
            </a>
        </li>
    )
}

CategoriesItem.propTypes = {
    title: PropTypes.string.isRequired,
    select: PropTypes.func.isRequired,
    defaultCategory: PropTypes.string.isRequired,
}

export default CategoriesItem
