import StockSection from './StockSection/StockSection'
import ProductSection from "./ProductSection/ProductSection"
import styles from './MainSection.module.css'

function MainSection() {
    return (
        <main className={styles.main}>
            <StockSection />
            <ProductSection />
        </main>
    )
}

export default MainSection
