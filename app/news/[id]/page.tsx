import { Metadata } from 'next'
import styles from './NewsPage.module.scss'
import { getCurrentNew } from '@/services/getCurrentNew'
import Link from 'next/link'

interface Props {
  params: { id: number }
}

interface IHref {
  label: string
  link: string
}
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: 'Новости',
  }
}

const NewsPage = async ({ params: { id } }: Props) => {
  const currentNew = await getCurrentNew(id)
  return (
    <div className={styles.pageContainer}>
      <h2>{currentNew[0].title}</h2>
      <div className={styles.pageBlock}>
        {currentNew[0].text.split('\n').map((item: string, i: number) => {
          return (
            <p className={styles.paragraph} key={i}>
              {item}
            </p>
          )
        })}
      </div>
      <div className={styles.pageBlock}>
        {currentNew[0].hrefs &&
          currentNew[0].hrefs.map((href: IHref) => {
            return (
              <div key={href.link}>
                <Link href={href.link} target='_blank'>
                  {href.label}
                </Link>
                <br />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default NewsPage
