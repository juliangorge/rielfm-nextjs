import PostComponent from '../../components/Post'
import { getPost, updatePostViews } from '../../config/db'

export default function Post ({ item, path } : any ) {
  return (
    <PostComponent params={{
      item,
      path
    }} />
  )
}

export async function getStaticPaths() {
  try {
    const paths: any[] = []

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { 
      paths, 
      fallback: 'blocking'
    }
  }
  catch( error ){
    console.log(error)
  }
}

export async function getStaticProps (path : any) {
  try {
    const slug = path.params.slug

    let id = (slug.substring(slug.indexOf('_') + 1))

    const item = await getPost(id)

    if(item != null) await updatePostViews(id)

    return {
      props: {
        item,
        path: path.params
      },
      revalidate: 14400, // 4 horas
    }
  } catch (error) {
    //console.log(error)
    return {
      redirect: {
        destination: '/',
        statusCode: 307
      }
    }
  }
}
