import React, {useState} from 'react'
import Header from './components/shared/header/Header';
import Main from "./components/Main/Main";
import History from "./components/History/History";
import BackButton from "./components/ui/BackButton/BackButton";


function App() {
    const [historyView, setHistoryView] = useState(false)
    return (
        <>
            <Header />
            { historyView ?
              <>
                <History setHistoryView={setHistoryView}/>
                <BackButton onClick={() => setHistoryView(false)} />
              </>
              : <Main setHistoryView={setHistoryView}/>

            }
        </>
    )
}

export default App;
