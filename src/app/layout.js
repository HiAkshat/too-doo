import './globals.css'
import AuthProvider from '@/components/authProvider/authProvider'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '(too-doo)',
  description: 'add your notes simple and easy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark'>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
