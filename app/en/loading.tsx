import loadingImg from '../../assets/loading.png'
import Image from 'next/image'
const LoadingPage = () => {
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <Image src={loadingImg} alt='Loading' className='animate-spin mb-5' />
      <p className='text-xl'>Loading...</p>
    </div>
  )
}

export default LoadingPage
