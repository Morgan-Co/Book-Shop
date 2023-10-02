import { useRef } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import styles from './CategoriesItem.module.css'

function CategoriesItem({ title }) {
    const liRef = useRef(null)

    const addBulletClass = (e) => {
        e.preventDefault()
        const listItems = document.querySelectorAll(`.${styles.liItem}`)
        listItems.forEach((item) => {
            if (item === liRef.current) {
                item.classList.add('bullet')
            } else {
                item.classList.remove('bullet')
            }
        })
    }

    return (
        <li ref={liRef} className={styles.liItem}>
            <a
                href="/"
                onClick={() => {
                    addBulletClass()
                }}
            >
                {title}
            </a>
        </li>
    )
}

CategoriesItem.propTypes = {
    title: PropTypes.string.isRequired,
}

export default CategoriesItem
