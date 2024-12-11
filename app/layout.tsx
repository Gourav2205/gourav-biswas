import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './lib/theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gourav Biswas - NextJS Developer & Data Scientist',
  description: 'Portfolio of a Full Stack Developer and Data Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

