import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@app/components/Header'
import Footer from '@app/components/Footer'

import { Mulish } from 'next/font/google';
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
});
 


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Welcome',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
     
      <body  suppressHydrationWarning={true} >
       <Header/>
      {children}
       <Footer/>
      </body>
    </html>
  )
}
