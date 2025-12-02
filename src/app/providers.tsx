import React from 'react'
import { ThemeProvider } from '../shared/context/ThemeContext'
import { SnowDayProvider } from '../shared/context/SnowDayContext'

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <SnowDayProvider>{children}</SnowDayProvider>
    </ThemeProvider>
  )
}
