import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchValueSelector} from '../recoil/searchValueAtom'
import { searchStateAtom} from '../recoil/searchStateAtom'
import { menuBarStateSelector} from '../recoil/menuBarStateAtom'
import MenuCard from './menuCard'
import TerminalInfo from './terminalInfo'

function MenuBar() {
    const searchState = useRecoilState(searchStateAtom)
    const searchValue = useRecoilValue(searchValueSelector)
    const menuBarState = useRecoilValue(menuBarStateSelector)

    console.log('[menuBar]검색 단말기: '+searchValue)
    console.log('[menuBar]검색 매뉴: '+searchState)
    console.log('[menuBar]조회 매뉴: '+menuBarState)

   

    useEffect(() => {
        //setInput('')
        //setMenuStatus(false)
    },[])
  
    return (   
        <>
        {menuBarState && (
            <div id="dataArea">
            <div className="col-12 col-sm-12 col-lg-12">
                <div className="card">
                    <div className="card-body">
                            <MenuCard/>
                        <div className="tab-content px-4" id="myTabContent2">
                            <div className="tab-pane fade active show" id="terminalInfo" role="tabpanel" aria-labelledby="terminalInfo-tab">
                                <div className="col-10 col-md-10 col-lg-10 m-auto ">
                                    <div className="card">
                                        <div className="card-body" id="terminalInfo-body">
                                            <TerminalInfo prop={searchValue} key={searchValue}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tStatus" role="tabpanel" aria-labelledby="tStatus-tab">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">수집시간</th>
                                        <th scope="col">PDERROR</th>
                                        <th scope="col">품절정보</th>
                                        <th scope="col">고장정보</th>
                                    </tr>
                                    </thead>
                                    <tbody id="tStatus-table-body"></tbody>
                                </table>
                            </div>

                            <div className="tab-pane fade" id="asList" role="tabpanel" aria-labelledby="asList-tab">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="accordion"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="payments" role="tabpanel" aria-labelledby="payments-tab">
                                <div className="col-10 col-md-10 col-lg-10 m-auto ">
                                    <div className="card">
                                        <div className="card-body" id="payments-body">
                                        </div>
                                    </div>
                                </div>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}</>
    )
}

    export default MenuBar
