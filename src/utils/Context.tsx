"use client"
import { createContext,ReactNode,useContext,useState} from "react"

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
export const useVariants = () =>{
    const {setVariant,variant} = useContext(Context);
    return {variant , setVariant}
}


export const useCursorProvider = () => {
    return useContext(Context)
}
