import PropTypes from 'prop-types'
import styles from './UserSection.module.css'
import UserIcon from '../../../../assets/icons/user.svg'
import SearchIcon from '../../../../assets/icons/search.svg'
import BagShopIcon from '../../../../assets/icons/shop-bag.svg'

function UserSection({ bookNum }) {
    function inBasketNum() {
        return <span className={styles.bookNum}>{bookNum}</span>
    }
    return (
        <div className={styles.userSection}>
            <a className={styles.userSectionLink} href="/profile">
                <img src={UserIcon} alt="User-Icon" />
            </a>
            <a className={styles.userSectionLink} href="/search">
                <img src={SearchIcon} alt="User-Icon" />
            </a>
            <a className={styles.userSectionLink} href="/basket">
                <img src={BagShopIcon} alt="User-Icon" />
            </a>
            <div className={styles.bookNumBody}>
                {bookNum !== 0 ? inBasketNum() : ''}
            </div>
        </div>
    )
}

UserSection.propTypes = {
    bookNum: PropTypes.number.isRequired,
}

export default UserSection
