import { MainLayout } from '../../components/MainLayout'

export default function Element({ post }) {
  return <MainLayout title={post.title + ' | Portfolio'}>
    <h1>{post.title}</h1>
    <hr />
    <p>{post.body}</p>
  </MainLayout>
}

export async function getServerSideProps({ query }) {
  const response = await fetch(`${process.env.API_URL}/portfolio/${query.id}/`)
  const post = await response.json()

  return {props: {post}}
}