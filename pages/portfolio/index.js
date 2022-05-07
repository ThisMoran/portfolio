import Link from 'next/link'
import style from '../../styles/main.module.scss'
import { MainLayout } from '../../components/MainLayout'

export default function Portfolio({ posts }) {
  return (
    <MainLayout title={'Portfolio'}>
      <div className={style.infoBlock}>
        <h1>Портфолио</h1>
        <p>Здесь находятся проекты, в которых я принимал участие.</p>
      </div>
      <div className={style.placeBlock}>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/portfolio/[id]`} as={`/portfolio/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/portfolio/`)
  const posts = await response.json()

  return { props: { posts } }
}