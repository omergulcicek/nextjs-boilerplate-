import dayjs from "dayjs"
import "dayjs/locale/tr"

export const dateFormat = (options = {}) => {
  const { date = new Date(), format = "DD MMMM YYYY" } = options
  return dayjs(date).locale("tr").format(format)
}
