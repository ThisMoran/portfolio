import style from '../styles/main.module.scss'
import Image from 'next/image'
import { MainLayout } from '../components/MainLayout'

export default function Contacts() {
  const sendForm = event => {
    event.preventDefault()
    console.log(event.target.name.value)
  }
  return (
    <MainLayout title={'Contacts'}>
      <div className={style['form-container']}>
        <p>Cо мной можно cвязаться через:</p>
        <div className={style.menu}>
          <a href="https://vk.com/thismoran" target={'_blank'} rel="noopener noreferrer nofollow">
            <Image src="/vk.svg" alt="Логотип Вконтакте" width={'48px'} height={'48px'} />
            <p>vk.com/thismoran</p>
          </a>
          <a href="https://t.me/thismoran" target={'_blank'} rel="noopener noreferrer nofollow">
            <Image src="/telegram.svg" alt="Логотип Телеграм" width={'48px'} height={'48px'} />
            <p>@thismoran</p>
          </a>
          <a href="mailto:d.derdel@yandex.ru" target={'_blank'} rel="noopener noreferrer nofollow">
            <Image src="/email.svg" alt="Логотип Электронной почты" width={'48px'} height={'48px'} />
            <p>d.derdel@yandex.ru</p>
          </a>
        </div>
        <p>Или заполнить эту форму, и я свяжусь с Вами:</p>
        <form onSubmit={sendForm}>
          <input id="name" type="text" autoComplete="name" placeholder='Ваше имя…' required />
          <input id="contact" type="text" autoComplete="contact" placeholder='Почта/Telegram' required />
          <textarea id="message" name="message" placeholder='Сообщение'></textarea>
          <button className={style['btn-default']} type="submit">Отправить</button>
        </form>
      </div>
      <div className={style.infoBlock}>
        <h1>Контакты</h1>
      </div>
    </MainLayout>
  )
}