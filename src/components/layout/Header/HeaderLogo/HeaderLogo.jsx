import styles from './HeaderLogo.module.css'

import Logo from '../../../../assets/icons/Bookshop.svg'

function HeaderLogo() {
    return (
        <div className={styles.headerLogo}>
            <a href="/">
                <img src={Logo} alt="Book-Shop Logo" />
            </a>
        </div>
    )
}

export default HeaderLogo
