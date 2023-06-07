import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { getAllNews } from '@/services/getAllNews'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ассоциация "Налоги России"',
  description:
    'Группа компаний "Ассоциация "Налоги России" является лидером среди аудиторско-консалтинговых компаний Уральского региона, цель которой – способствовать развитию бизнеса и приращению успеха Клиентов.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const allNews = await getAllNews()
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-sky-50'}>
        <div className='max-w-[1900px] m-auto'>
          <Header allNews={allNews} />
          <main className='mainlayout'>
            <div>{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
