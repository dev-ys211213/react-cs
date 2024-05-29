import { atom } from 'recoil'

export const searchStateAtom = atom<number>({
    key: 'searchStateAtom',
    default: 0,
})