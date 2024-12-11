'use client'

import React, { createContext, useContext, useEffect } from 'react'

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProviderContext = createContext<undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
    useEffect(() => {
        document.documentElement.classList.add('dark')
    }, [])

    return React.createElement(ThemeProviderContext.Provider, { value: undefined }, children)
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

