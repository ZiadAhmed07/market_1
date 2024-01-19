"use client"

import { Context , createContext, useState} from "react"


export const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {
    
    const [mode , setMode] = useState('dark')
    
    const toggle = ()=>{
        setMode(prev => (prev === "dark" ? "light" : "dark"))
    }

    return(
    <ThemeContext.Provider value={{toggle , mode}}>
        <div className={mode} id="contianer">
            {children}
        </div>
    </ThemeContext.Provider>
    )
}