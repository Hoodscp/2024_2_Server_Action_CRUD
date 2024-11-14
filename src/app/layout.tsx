import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'

const geistSans = localFont({
  src: './fonts/SejongGeulggot.ttf',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/SejongGeulggot.ttf',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'MogngoDB CRUD',
  description: 'Create, Read, Update, and Delete in MongoDB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-mono)]`}
      >
        <div className="max-w-4xl mx-auto">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  )
}