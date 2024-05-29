import { TStatus } from 'src/dto/TStatus'

interface Props {
    prop: TStatus
}

function Tap2({ prop }: Props) {
    return (
        <>     
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
                <tbody id="tStatus-table-body">
                {prop !== null ?
                    <tr>
                        <td>17:34:19</td>
                        <td>자판기모델명 : BGQTPR53dU95Flt5/ 전화모뎀감도 : 31/ 전화번호 : 1220081453</td>
                        <td></td>
                        <td></td>
                    </tr>  
                    : <tr><td colSpan={4}>데이터 없음</td></tr>} 
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Tap2
