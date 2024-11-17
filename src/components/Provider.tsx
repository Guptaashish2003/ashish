"use client"

import { ReactNode } from "react"
import { ContextProvider } from "@/utils/Context"
import { Cursor } from "./Cursor"
import { SmoothScroll } from "./Smooth-Scroll"


export const Provider = ({children}:{children:ReactNode}) => {
  return (
    <>
    <SmoothScroll>
        <ContextProvider>
          <Cursor />
          {children}
        </ContextProvider>
      </SmoothScroll>
    </>
  )
}
