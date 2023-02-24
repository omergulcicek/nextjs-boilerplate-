import { selector } from "recoil"
import { itemsAtom } from "./../atoms"

export const itemsSelector = selector({
  key: "itemsSelector",
  get: ({ get }) => {
    const items = get(itemsAtom)
    return {
      items,
      itemsLength: items.length,
      itemsFilterd: items.filter((e) => e > 3),
    }
  },
})
