import { useQuery } from "react-query"

export const useFetch = (key, url) => {
  const {
    isLoading,
    isError,
    isSuccess,
    isIdle,
    isFetching,
    status,
    error,
    data,
  } = useQuery(key, () => fetch(url).then((res) => res.json()))

  return {
    isLoading,
    isError,
    isSuccess,
    isIdle,
    isFetching,
    status,
    error,
    data,
  }
}
