import './globals.css'
import { Inter } from 'next/font/google'

export const dynamic = 'force-dynamic';
export const revalidate = 0

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log('Hi');
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <h1>Hi</h1>
      </body>
    </html>
  )
}
