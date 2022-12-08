import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex  place-content-center h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <div className='self-center '>
      <p className="font-sans text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
         Nextjs doceker tailwindcss <br />
      </p>
      <p className="font-sans text-1xl  text-transparent bg-clip-text bg-gradient-to-r from-[#ffff00] to-cyan-500 " >bad0s</p>
      </div>
    </div>

  )
}
