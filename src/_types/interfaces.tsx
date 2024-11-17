import { Variants } from "./types"
export  interface ContextProps {
    variant: Variants;
    setVariant:React.Dispatch<React.SetStateAction<Variants>>;
}