import PropTypes from "prop-types"
import styles from './Header.module.css'
import HeaderNav from './HeaderNav/HeaderNav'
import UserSection from './UserSection/UserSection'
import HeaderLogo from './HeaderLogo/HeaderLogo'

function Header({bookNum}) {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <HeaderLogo />
                <HeaderNav />
                <UserSection bookNum={bookNum} />
            </div>
        </header>
    )
}

Header.propTypes = {
    bookNum: PropTypes.number.isRequired
}

export default Header
