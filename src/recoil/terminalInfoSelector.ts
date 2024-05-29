import { selector } from 'recoil'
import { searchValueAtom } from './searchValueAtom'
import axios from 'axios'


export const terminalInfoSelector = selector({
  key: 'terminalInfoSelector',
  get: async ({ get }) => {
    const searchValue = get(searchValueAtom)

    // API 호출
    try {
        const res = await axios.get(`https://devapi.ubcn.co.kr:17881/vmms/terminals/${searchValue}`)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
},
});