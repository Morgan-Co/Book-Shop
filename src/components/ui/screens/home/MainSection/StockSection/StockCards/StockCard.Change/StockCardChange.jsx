import styles from './StockCardChange.module.css'
import ArrowIcon from '../../../../../../../../assets/icons/arrow.svg'


function StockCardChange() {
    return (
        <a className={styles.link} href="/">
            <div>
                <span>Change old book on new</span>
                <span>
                    <img src={ArrowIcon} alt="Arrow-Icon" />
                </span>
            </div>
        </a>
    )
}

export default StockCardChange
