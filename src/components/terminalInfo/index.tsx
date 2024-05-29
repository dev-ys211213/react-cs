import { useMemo } from 'react'
import { useRecoilValueLoadable } from 'recoil'
import {terminalInfoSelector} from '../../recoil/terminalInfoSelector'
import Tap1 from './list'
// recoil 반영전
//import { TerminalInfo } from '../dto/terminalInfo'
//import axios from 'axios'

function Index({ prop }) {
    console.log(prop)

    const tSelector = useRecoilValueLoadable(terminalInfoSelector)

    const DATA_LIST = useMemo(() => {
        console.log(tSelector)
        if (tSelector !== null && tSelector.state === 'hasValue') {
        console.log(tSelector.contents.results)
            const result = <Tap1 prop={tSelector.contents} key={tSelector.contents.terminalId} />

        /* const result = Array.isArray(tSelector.contents.results)
        ? tSelector.contents.results.map((data: TerminalInfo) => (
        <Tap1 prop={data} key={data.terminalId} />
        ))
        : <Tap1 prop={tSelector.contents.results} key={tSelector.contents.results.terminalId} />;
        console.log(result)*/
        return result
        } else {
            return <div>데이터 없음</div>
        }
    }, [tSelector])

    //const [data, setData] = useState<TerminalInfo | null>()
    //const [isLoading, setIsLoading] = useState(false);
    /*const getData = async () => {
        if (prop != ''){
            try {
                const res = await axios.get(`https://devapi.ubcn.co.kr:17881/vmms/terminals/${prop}`)
                console.log(res)
                setData(res.data)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
        else setData(null)
    }*/

    /*useEffect(() => {
        setIsLoading(true);
        console.log('처음 접근한 후에 api호출')
        getData()
        .then((result) => {
            //setData(result);
            console.log(result)
            //setIsLoading(false);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
            setIsLoading(false);
        })
        console.log(data)
        setIsLoading(false);
    }, [])*/

    return (
        <div className="card-body" id="terminalInfo-body">
            {DATA_LIST}
            {/* {isLoading ? (
            <div>Loading...</div>
        ) : data !== null ? (
            <div className="tab-content px-4" id="myTabContent2">
                <Tap1 prop={data} /> 
            </div>
        ) : (
            <div>데이터 없음</div>
        )} */}
    </div>
    )
}

export default Index
