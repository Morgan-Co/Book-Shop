
import CategoriesItem from './CategoriesItem/CategoriesItem'
import styles from './Categories.module.css'

function Categories() {
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
        // Добавьте остальные категории здесь
    ]

    const categoriesWithId = categories.map((category, index) => ({
        ...category,
        id: index + 1,
    }))


    return (
        <div className={styles.categories}>
            <div>
                {categoriesWithId.map((category) => (
                    <CategoriesItem key={category.id} title={category.title}/>
                ))}
            </div>
        </div>
    )
}

export default Categories

/* Разобраться как сделать так, чтобы не ставить каждый раз индекс вручную,
а чтобы он ставился автоматически в зависимости от индекса
и так чтобы линтер не ругался */
