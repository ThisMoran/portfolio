import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/main.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.author}>Дмитрий Д.</div>
        <nav className={style.menu}>
          <Link href={'/contacts'}><a>Контакты</a></Link>
          <Link href={'/'}><a>Главная</a></Link>
          <Link href={'/portfolio'}><a>Портфолио</a></Link>
        </nav>
        <nav className={`${style.menu} ${style.soc}`}>
          <a href="https://t.me/thismoran" target={'_blank'} rel="noopener noreferrer nofollow">
            <Image src="/telegram.svg" alt="Логотип Телеграм" width={'32px'} height={'32px'} />
          </a>
          <a href="https://vk.com/thismoran" target={'_blank'} rel="noopener noreferrer nofollow">
            <Image src="/vk.svg" alt="Логотип Вконтакте" width={'32px'} height={'32px'} />
          </a>
        </nav>
      </footer>
    </>
  )
}

export default Footer