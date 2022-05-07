import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout title='Error 404'>
      <h1 className={classes.error}>Error 404</h1>
      <p>Plase <Link href={'/'}><a>go back</a></Link> to safety</p>
    </MainLayout>
  )
}