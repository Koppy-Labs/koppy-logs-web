import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const neue = localFont({
  src: './fonts/NeueMontreal-Regular.otf',
  variable: '--font-neue',
})

export const metadata: Metadata = {
  title: 'Koppy Logs',
  description: 'Modern logging for FiveM servers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${neue.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
