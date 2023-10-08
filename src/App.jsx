import { useState } from 'react'
import Header from './components/layout/Header/Header'
import MainSection from './components/ui/screens/home/MainSection/MainSection'

function App() {
const [bookNum, setBookNum] = useState(0)

    return (
        <div>
            <Header bookNum={bookNum} />
            <MainSection  getBookNum={setBookNum}/>
        </div>
    )
}

export default App
