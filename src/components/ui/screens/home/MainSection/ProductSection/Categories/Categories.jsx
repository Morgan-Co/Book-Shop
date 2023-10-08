import PropTypes from 'prop-types'
import CategoriesItem from './CategoriesItem/CategoriesItem'
import styles from './Categories.module.css'

function Categories({ select, defaultCategory }) {
    const categories = [
        { title: 'Architecture' },
        { title: 'Art & Fashion' },
        { title: 'Biography' },
        { title: 'Business' },
        { title: 'Crafts & Hobbies' },
        { title: 'Drama' },
        { title: 'Fiction' },
        { title: 'Food & Drink' },
        { title: 'Health & Wellbeing' },
        { title: 'History & Politics' },
        { title: 'Humor' },
        { title: 'Poetry' },
        { title: 'Psychology' },
        { title: 'Science' },
        { title: 'Technology' },
        { title: 'Travel & Maps' },
    ]

    const categoriesWithId = categories.map((category, index) => ({
        ...category,
        id: index + 1,
    }))


    return (
        <div className={styles.categories}>
            <div>
                {categoriesWithId.map((category) => (
                    <CategoriesItem
                        key={category.id}
                        title={category.title}
                        select={select}
                        defaultCategory={defaultCategory}
                    />
                ))}
            </div>
        </div>
    )
}

Categories.propTypes = {
    select: PropTypes.func.isRequired,
    defaultCategory: PropTypes.string.isRequired,
}

export default Categories
