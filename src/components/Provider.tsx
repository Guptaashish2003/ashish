"use client"

import { ReactNode } from "react"
import { ContextProvider } from "@/utils/context"
import { Cursor } from "./cursor"
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
