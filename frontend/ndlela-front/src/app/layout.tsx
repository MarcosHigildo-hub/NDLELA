import './globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='bg-light'>{children}</main>
      </body>
    </html>
  )
}