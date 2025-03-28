'use client'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material'

function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MuiProvider
