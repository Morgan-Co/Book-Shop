import SwiperSlider from './SwiperSlider/SwiperSlider'
import StockCardChange from './StockCards/StockCard.Change/StockCardChange'
import StockCardTop from './StockCards/StockCard.Top/StockCardTop'
import styles from "./StockSection.module.css"

function StockSection() {
    return (
        <div className={styles.stockSection}>
            <SwiperSlider />
            <StockCardChange />
            <StockCardTop />
        </div>
    )
}

export default StockSection
