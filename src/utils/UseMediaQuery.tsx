"use client"
import { useEffect, useState } from "react"
import { useMediaQueryOptions } from "@/_types/interfaces"
const UseMediaQuery = (
    query:string,
    options?:useMediaQueryOptions
 ) :boolean => {
    const [matches,setMatches] = useState<boolean>(
        options?.defautlValue ?? false
    );

    useEffect(() => {
        // Check if we're on the server (no window object)
        if (typeof window !== "undefined") {
          const media = window.matchMedia(query);
          const listener = () => setMatches(media.matches);
    
          if (options?.intializedValue !== false) {
            setMatches(media.matches); // Initialize with initial state
          }
    
          window.addEventListener("resize", listener);
    
          return () => window.removeEventListener("resize", listener);
        }
    
        // Return default value on server-side rendering
        return () => {};
      }, [query, options]);
    
      return matches;
    }
    

export default UseMediaQuery