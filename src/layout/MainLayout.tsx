import { ThemeProvider } from '@/context/ThemeProvider'
import { ReactNode } from 'react'

type MainLayoutProps = {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        {children}
    </ThemeProvider>
  )
}

export default MainLayout