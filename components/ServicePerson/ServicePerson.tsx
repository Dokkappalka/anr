import styles from './ServicePerson.module.scss'
import Image from 'next/image'

interface Props {
  name: string
  image: any
  work: string
  phone: string
  isEn: boolean
}
const ServicePerson = ({ name, image, work, phone, isEn }: Props) => {
  return (
    <div className={styles.personContainer}>
      <Image src={image} alt='nikitenkov image' />
      <div>
        <p className='font-semibold'>
          {isEn
            ? 'Responsible for the tendency:'
            : 'Ответственный за направление:'}
        </p>
        <p>{name}</p>
        <p>{work}</p>
        <p>
          {isEn ? 'Telephone:' : 'Контактный телефон:'} {phone}
        </p>
      </div>
    </div>
  )
}

export default ServicePerson
