import Image from 'next/image'
import MainScreen from './mainScreen'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <MainScreen />
    </div>
  )
}
