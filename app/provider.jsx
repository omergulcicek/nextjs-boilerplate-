"use client"

import { RecoilRoot } from "recoil"
import { QueryClientProvider, QueryClient } from "react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const queryClient = new QueryClient()

export function Provider(props) {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <NextThemesProvider {...props} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )
}
