import { RenderResult, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import { ReactNode } from 'react'

export function renderWithTheme(children: ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
