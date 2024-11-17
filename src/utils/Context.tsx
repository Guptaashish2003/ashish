"use client"
import { createContext,Dispatch,ReactNode,useContext,useState} from "react"

import { Variants } from "@/_types/types"
import { ContextProps } from "@/_types/interfaces"

const Context = createContext<ContextProps >({
    setVariant:()=>{},
    variant:"DEFAULT"
})

export const ContextProvider = ({children}:{children:ReactNode}) => {
    const [variant,setVariant] = useState<Variants>("DEFAULT")
    return (
        <Context.Provider value={{variant,setVariant}}>
            {children}
        </Context.Provider>
    )
}

export const useCursorProvider = () => {
    return useContext(Context)
}
