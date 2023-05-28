import { setUrl, showImage, showAd } from '../helpers'
import SeoMetaTags from '../components/SeoMetaTags'
import Script from 'next/script'
import Link from 'next/link'
import { getHome, getCronogramaDePagos, getFarmacia, getMasLeidas } from '../config/db'
import HomeAside from '../components/HomeAside'

export default function Index ({ items, cronograma, masLeidas, farmacia } : any ) {

  if(items == null || cronograma == null){
    return (
      <>Loading...</>
    )
  }
  
  return (
    <>

      <SeoMetaTags params={{
        type: 'website',
				title: 'FM Riel - La Radio de Basavilbaso',
				description: 'Noticias de la ciudad, Entre Ríos, Argentina y el mundo.',
				path: 'https://rielfm.com.ar/',
				image: 'https://rielfm.com.ar/img/og-images/index.png'
      }} />

      <div className='bg-black'>
        <div className='container'>
          <div className='row'>
            <div className="col-lg-10 mx-auto my-2">
              {showAd('/img/ads/agroactiva.gif', 'https://agroactiva.com/')}
            </div>
            <div className='col-lg-10 mx-auto'>
              <div className='row'>
                <div className='col-md-8'>
                  <article className='article mb-3'>
                    <Link href={setUrl(items.top)}>
                      {showImage(items.top.image, true)}
                      <h6 className='section'>{items.top.pompadour}</h6>
                      <h1 className='h2 text-white'>{items.top.title}</h1>
                    </Link>
                  </article>
                  {showAd('/img/ads/laclarita.png', 'https://bit.ly/3mOC6JC')}
                </div>
                <div className='col-md-4'>
                  <div className='list-group border-radius-0 mb-3'>
                    <Link href='/vivo' className='list-group-item'>Radio en vivo</Link>
                    <Link href={'/' + cronograma.id + '.htm'} className='list-group-item'>Cronograma de pagos</Link>
                    <Link href='/necrologicas' className='list-group-item'>Necrológicas</Link>
                  </div>
                  {showAd('/img/ads/donar-sangre.gif', 'https://portal.entrerios.gov.ar/inicio')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='dynamic-ad my-2'>
                  <div id='46674-1'>
                    <Script src='//ads.themoneytizer.com/s/gen.js?type=1' />
                    <Script src='//ads.themoneytizer.com/s/requestform.js?siteId=46674&formatId=1' />
                  </div>
                </div>
                <div className='row'>
                  
                  {[items.left, items.right].map(function(column, column_id){
                    return (<div className='col-md-6 column' key={column_id}>
                      {column.map(function(post: any, post_id: number){
                        return (
                          <article className='article py-2 mb-2' key={post_id}>
                            <Link href={setUrl(post)}>
                              {showImage(post.image)}
                              <h6 className='section'>{post.pompadour}</h6>
                              <h2 className='h5'>{post.title}</h2>
                            </Link>
                          </article>
                        )
                      })}
                    </div>)
                  })}
                </div>
              </div>
              <div className='col-md-4 py-2 mb-2'>
                <HomeAside farmacia={farmacia} masLeidas={masLeidas} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps () {
  try {

    const items = await getHome(),
          cronograma = await getCronogramaDePagos(),
          farmacia = await getFarmacia(),
          masLeidas = await getMasLeidas();

    return {
      props: {
        items,
        cronograma,
        farmacia,
        masLeidas
      },
      revalidate: 14400, // 4 horas
    }
  } catch (error) {
    console.log(error)
    return {
      redirect: {
        destination: '/500',
        statusCode: 307
      }
    }
  }
}