import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center mt-[180px] text-white'>
      <h2 className='text-[32px] font-bold '>404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/"
            className='bg-blue-500 px-[20px] py-[10px] inline-block mt-[20px]'>Return Home</Link>
    </div>
  )
}