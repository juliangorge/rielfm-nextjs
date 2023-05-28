import Link from 'next/link'
import dynamic from 'next/dynamic'
import { showAd, showFarmacia, setUrl } from '../helpers'
import Script from 'next/script'
import LigaRegional from './LigaRegional'

const HomeAside = (params) => {
    const Calendar = dynamic(() => import('./Calendar.js'), {
        ssr: false
    })

    return (
        <div>

            {showAd('/img/ads/senado.png', 'https://www.senadoer.gob.ar')}

            <div className='dynamic-ad'>
                <div id='46674-2'>
                    <Script src='//ads.themoneytizer.com/s/gen.js?type=2' />
                    <Script src='//ads.themoneytizer.com/s/requestform.js?siteId=46674&formatId=2'  />
                </div>
            </div>

            <div className='mb-2'>
                <h6 className='title-black'>Farmacia de turno</h6>
                <div className='list-group border-radius-0'>
                    {showFarmacia(params.farmacia)}
                </div>
            </div>

            {showAd('/img/ads/chafito.png', 'mailto:chafitopropiedades@gmail.com')}

            <LigaRegional />

            <div className='mb-2'>
                <h6 className='title-black'>Más leídas</h6>
                <div className='list-group list-group-numbered border-radius-0 mb-3'>
                    {params.masLeidas.map(function(post, post_id){
                        return (
                            <Link href={setUrl(post)} className='list-group-item' key={post_id}>
                                <small>{post.title}</small>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {showAd('/img/ads/don-pedro.png', 'mailto:donpedro@donpedrod.arnetbiz.com.ar')}

            <div className='mb-4'>
                <h6 className='title-black'>Lluvias en Basavilbaso</h6>
                <Calendar city_id={1} />
                <Link href='/lluvias' className='btn btn-outline-dark btn-sm mt-3'>Ver registro zonal</Link>
            </div>

            {showAd('/img/ads/gcagro.png', 'https://gcagro.com.ar')}
            
            {showAd('/img/ads/muni-basso.png', 'https://basavilbaso.gob.ar')}        
                
            {showAd('/img/ads/santa-anita.png', 'http://www.santaanita.gob.ar/')}

        </div>
    )
}

export default HomeAside