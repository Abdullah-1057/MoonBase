import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Page1 } from "@/modules/pages/page1";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='absolute'>
      <div className=''>
      <Page1/>

      </div>
    </main>
  )
}
