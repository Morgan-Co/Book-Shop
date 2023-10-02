import styles from './Header.module.css'
import HeaderNav from './HeaderNav/HeaderNav'
import UserSection from './UserSection/UserSection'
import HeaderLogo from './HeaderLogo/HeaderLogo'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <HeaderLogo />
                <HeaderNav />
                <UserSection />
            </div>
        </header>
    )
}

export default Header
