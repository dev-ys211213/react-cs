import { useState } from 'react'
//import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { searchStateAtom } from '../recoil/searchStateAtom'
//import Style from 'src/assets/css/bootstrap.min.css'

interface MenuList{
    id : number,
    path : string,
    label: string,
    isActive: boolean
}
const jsonList: MenuList[] = [
    {
        id: 0,
        path: "/terminalInfo",
        label: "단말기정보",
        isActive: false
    },
    {
        id: 1,
        path: "/tStatus",
        label: "오늘상태조회",
        isActive: false
    },
    {
        id: 2,
        path: "/asList",
        label: "AS 이력조회",
        isActive: false
    },
    {
        id: 3,
        path: "/payments",
        label: "카드사 가맹점정보 조회",
        isActive: false
    }
]


function MenuCard() {
    const [menuList, setMenuList] = useState<MenuList[]>(jsonList)
    const [searchState, setSearchState] = useRecoilState(searchStateAtom)
    const [clickMenu, setClickMenu] = useState(0)

    console.log('[menuCard]선택 매뉴: '+searchState +'/'+clickMenu)

    const handleClickMenu = (id: number) => { //id?
        console.log(id)
        const updMenuList  = menuList.map((item) => {
            if (item.id === id) {
              return { ...item, isActive: true };
            } else {
              return { ...item, isActive: false };
            }
        });
        setClickMenu(id);
        setSearchState(id)
        setMenuList(updMenuList)
      }
      console.log('[menuCard]선택 매뉴2: '+searchState)

    /*useEffect(() => {
        menuList.forEach((menu: MenuList) => {
            if(menu.id==0 && menu.i) 

        })
        setMenuList([...menuList])
    }, [location.pathname])*/


    /*<li className="nav-item">
            <a className="nav-link active show" id="terminalInfo-tab"
                data-toggle="tab"
                href="#terminalInfo"
                role="tab" aria-controls="terminalInfo"
                aria-selected="true">단말기정보</a>
            </li>*/
    const navLinks = menuList.map((item: MenuList) => {
        return (
            <li className="nav-item">
                <a className={item.isActive ? `nav-link show active` : `nav-link show`} key={item.id} onClick={() => handleClickMenu(item.id)}>
                    {item.label}
                </a>
            </li>
        )
    })
    return <ul className="nav nav-pills" id="myTab3" role="tablist">{navLinks}</ul>
}

export default MenuCard