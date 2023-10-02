import styles from "./UserSection.module.css"

import UserIcon from '../../../../assets/icons/user.svg'
import SearchIcon from '../../../../assets/icons/search.svg'
import BagShopIcon from '../../../../assets/icons/shop-bag.svg'

function UserSection() {
    return(
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
    </div>
    )
}

export default UserSection