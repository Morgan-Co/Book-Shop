import styles from "./HeaderNav.module.css"

function HeaderNav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <button className={styles.navItem} type="submit">
                        Books
                    </button>
                </li>
                <li>
                    <button className={styles.navItem} type="submit">
                        Audiobooks
                    </button>
                </li>
                <li>
                    <button className={styles.navItem} type="submit">
                        Stationery & gifts
                    </button>
                </li>
                <li>
                    <button className={styles.navItem} type="submit">
                        blog
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav
