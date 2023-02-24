import { atom } from "recoil"

export const itemsAtom = atom({
  key: "itemsAtom",
  default: [1, 2, 3, 4],
})
