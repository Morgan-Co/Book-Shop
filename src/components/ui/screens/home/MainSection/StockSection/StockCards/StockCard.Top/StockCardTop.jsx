import styles from './StockCardTop.module.css'
import ArrowIcon from '../../../../../../../../assets/icons/arrow.svg'

function StockCardTop() {
    return (
        <a className={styles.link} href="/">
            <div>
                <span>top 100 books 2022</span>
                <span>
                    <img src={ArrowIcon} alt="Arrow-Icon" />
                </span>
            </div>
        </a>
    )
}

export default StockCardTop
