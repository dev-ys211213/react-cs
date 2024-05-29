import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import SearchBar from './components/searchBar'
import MenuBar from './components/menuBar'
import MainPage from './pages/index/index'
import InfoPage from './components/terminalInfo'
//import StatusPage from './pages/tStatus/index'
//import ASPage from './pages/asList/index'
//import PaymentPage from './pages/payments/index'

function App() {
    return (
        <RecoilRoot>
          <SearchBar/>
          <MenuBar/>
          <BrowserRouter>
              <Routes>
                  <Route index path="/" element={<MainPage />}></Route>
                  <Route path="/terminalInfo" element={<InfoPage prop={'2000051685'}/>}></Route>
                  {/* <Route path="/tStatus" element={<StatusPage />}></Route>
                  <Route path="/asList" element={<ASPage />}></Route>
                  <Route path="/payments" element={<PaymentPage />}></Route> */}
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
    )
}

export default App
