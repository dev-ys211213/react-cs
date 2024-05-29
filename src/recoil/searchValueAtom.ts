import { atom, selector } from 'recoil'

// 단말기ID 검색
export const searchValueAtom = atom<string>({
    key: 'searchValueAtom',
    default: '',
})

export const searchValueSelector = selector({
    key: 'searchValueSelector',
    get: ({get}) => get(searchValueAtom)
  });