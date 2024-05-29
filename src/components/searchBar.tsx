import { KeyboardEvent, useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { searchValueAtom} from '../recoil/searchValueAtom'
import { menuBarStateAtom, menuBarStateSelector} from '../recoil/menuBarStateAtom'
//import MenuBar from './menuBar'


function SearchBar() {
    const [input, setInput] = useState('')
    const setSearchValue = useSetRecoilState(searchValueAtom)
    const [,setMenuBarState] = useRecoilState(menuBarStateAtom)
    const menuBarState = useRecoilValue(menuBarStateSelector)

    console.log('맨처음')
    console.log(menuBarState)

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value
        setInput(inputValue)
        if (e.code === 'Enter'){
            if(inputValue == ''){
                alert('TID를 입력해주세요.')
                return false
            }
            if(inputValue.length != 10 ){
                alert('TID는 10자리 입니다.')
                return false
            }
           // setInput(inputValue)
            setSearchValue(inputValue) 
            setMenuBarState(true)
        }

        console.log('검색버튼후')
        console.log(menuBarState)

    };

    useEffect(() => {
        setInput('')
        setSearchValue('')
        setMenuBarState(false)
    },[])
  
    return (
        <div id="headerArea" className="col-6 m-auto mt-5">
            <div className="form-group floating-addon floating-addon-not-append">
            <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                    <i className="fas fa-search"></i>
                </div>
                </div>
                <input
                className="form-control"
                id="terminalId"
                placeholder="TID 조회"
                onKeyUp={onKeyUp}
                style={{width: '250px'}}
                //aria-label="Search" data-width="250" style="width: 250px;"maxlength="10" 
                />
                <div className="input-group-append">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={() => console.log('단말기번호 출력하자' + {input})}>
                    <i className="fas fa-search"></i>
                </button>
                </div>
            </div>
            </div>
        </div>
    )
}

    export default SearchBar
