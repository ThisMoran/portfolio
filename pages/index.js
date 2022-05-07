import style from '../styles/main.module.scss'
import { MainLayout } from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout title={'Home'}>
      <div className={style.infoBlock}>
        <p>Привет, меня зовут Дмитрий, и я</p>
        <h1>WEB-DEVELOPER</h1>
        <p>Создаю проекты с нуля, и дорабатываю существующие.</p>    
      </div>
      <div className={style.placeBlock}></div>
    </MainLayout>
  )
}