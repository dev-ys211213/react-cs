import { TerminalInfo } from 'src/dto/terminalInfo'

interface Props {
    prop: TerminalInfo
}

function Tap1({ prop }: Props) {
    return (
        <>
        {prop !== null ?
        <div className="tab-pane fade active show" id="terminalInfo" role="tabpanel" aria-labelledby="terminalInfo-tab">
        <div className="col-10 col-md-10 col-lg-10 m-auto ">
            <div className="card">
                <div className="card-body" id="terminalInfo-body">
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">사업자정보</label>
                        <div className="col-sm-9">
                            <input className="form-control" value={prop.businessNo + ' ('+ prop.bizType +'/'+ prop.presentName + ')' } readOnly/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">자판기모델/코드</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.model +'('+ prop.code + ')'} readOnly /></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">모뎀</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={'('+ prop.modem + ')'} readOnly/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">소속</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.company} readOnly/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">조직루트</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.organizationPath} readOnly/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">사용자명(VMMS)</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.userName +' ('+ prop.userId + ')'} readOnly/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">설치위치</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.place} readOnly data-listener-added_029a393e="true"/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">메모</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.memo} readOnly/></div>
                    </div>
                    <div className="form-group row mb-1"><label className="col-sm-3 col-form-label">CS메모</label>
                        <div className="col-sm-9"><input type="text" className="form-control" value={prop.csMemo} readOnly/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        : <div>데이터 없음</div>}
        </>
    )
}

export default Tap1
