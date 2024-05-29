import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <App />
    </React.StrictMode>
  /*<section className="section">
        <div id="headerArea" className="col-6 m-auto mt-5">
            <SearchBar />
        </div>
        <div id="emptyArea" className="col-6 m-auto page-error">
            <div className="page-description">데이터를 조회해주세요.</div>
        </div>
        <div id="dataArea">
            <div className="col-12 col-sm-12 col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <ul className="nav nav-pills" id="myTab3" role="tablist">
                         <searchList/>
                        </ul>
                        <div className="tab-content px-4" id="myTabContent2">
                            <div className="tab-pane fade active show" id="terminalInfo" role="tabpanel"
                                 aria-labelledby="terminalInfo-tab">
                                <div className="col-10 col-md-10 col-lg-10 m-auto ">
                                    <div className="card">
                                        <div className="card-body" id="terminalInfo-body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tStatus" role="tabpanel"
                                 aria-labelledby="tStatus-tab">
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


                            <div className="tab-pane fade" id="asList" role="tabpanel"
                                 aria-labelledby="asList-tab">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="accordion"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="payments" role="tabpanel"
                                 aria-labelledby="payments-tab">
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
    </section>*/
)
