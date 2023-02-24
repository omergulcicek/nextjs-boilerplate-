"use client"

import { RecoilRoot } from "recoil"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Provider(props) {
  return (
    <>
      <RecoilRoot>
        <NextThemesProvider {...props} />
      </RecoilRoot>
    </>
  )
}
