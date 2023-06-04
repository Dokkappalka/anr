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
  //   const currentNew = await getCurrentNew(id)
  return <div className={styles.pageContainer}>1</div>
}

export default NewsPage
