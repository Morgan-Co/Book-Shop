import PropTypes from "prop-types"
import StockSection from './StockSection/StockSection'
import ProductSection from './ProductSection/ProductSection'
import styles from './MainSection.module.css'

function MainSection({getBookNum}) {
    return (
        <main className={styles.main}>
            <StockSection />
            <ProductSection getBookNum={getBookNum}/>
        </main>
    )
}

MainSection.propTypes = {
    getBookNum: PropTypes.func.isRequired
}

export default MainSection
