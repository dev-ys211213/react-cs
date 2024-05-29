import { atom, selector } from 'recoil'

// menuBar 선택
export const menuBarStateAtom = atom<boolean>({
    key: 'menuBarStateAtom',
    default: false,
})

export const menuBarStateSelector = selector({
  key: 'menuBarStateSelector',
  get: ({get}) => get(menuBarStateAtom)
});