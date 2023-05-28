import { withoutInfo, showAd, showImage } from '../helpers'
import SeoMetaTags from './SeoMetaTags'
import Script from 'next/script'

import moment from 'moment'
import esLocale from 'moment/locale/es'
moment.updateLocale('es', [esLocale])

export default function Post({params}) {
    const item = params.item
    if(item == null) return withoutInfo()

    const path = 'https://rielfm.com.ar/' + (item['section_name']).toLowerCase() + '/' + params.path.slug

    return (
        <div className='container mt-3'>

            <SeoMetaTags params={{
				type: 'article',
				title: item['title'] + ' - FM Riel',
				section: item['section_name'],
				description: item['summary'],
				path: path,
				image: 'https://rielfm.com.ar/' + ( item['image'] != null ? 'files/images/' + item['image'] : 'img/og-images/index.png' )
			}} />

            <div className='row'>
                <div className='col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h6>{moment(item['date_created']).format('LLLL')}</h6>
                            <h1>{item['title']}</h1>
                            <p>
                                <b>{item['pompadour']}</b> | {item['summary']}
                            </p>

                            <ul className='nav my-3'>
                                <li className='ms-3'>
                                    <a className='text-muted cursor-pointer font-size-20' onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=' + path, 'sharer', 'width=626,height=436')}>
                                        <i className='bi bi-facebook'></i>
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a className='text-muted cursor-pointer font-size-20' onClick={() => window.open('https://twitter.com/intent/tweet?url=' + path + '&amp;text=&quot;' + item['title'] + '&quot;','sharer','width=626,height=260')}>
                                        <i className='bi bi-twitter'></i>
                                    </a>
                                </li>
                                <li className='ms-3'>
                                    <a className='text-muted cursor-pointer font-size-20' href={'https://api.whatsapp.com/send?&text=' + item['title'] + ' - https://rielfm.com.ar/' + item['id'] + '.htm'} data-action='share/whatsapp/share'>
                                        <i className='bi bi-whatsapp'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-8'>

                            {showAd('/img/ads/iapv-boleta.gif', 'http://www.iapv.gov.ar')}

                            <br />
                            {showImage(item['image'])}
                            <br />

                            <div style={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
                                
                            </div>

                            <div id='body-content' className='my-3' dangerouslySetInnerHTML={{__html: item['body']}}>
                            </div>

                            <div className='dynamic-ad'>
                                <div className='outbrain-tm' id='46674-16'>
                                    <Script src='//ads.themoneytizer.com/s/gen.js?type=16' />
                                    <Script src='//ads.themoneytizer.com/s/requestform.js?siteId=46674&formatId=16' />
                                </div>
                            </div>

                        </div>
                        <div className='col-md-4'>
                            {showAd('/img/ads/donar-sangre.gif', 'https://portal.entrerios.gov.ar/inicio')}

                            <div className='dynamic-ad'>
                                <div id='46674-2'>
                                    <Script src='//ads.themoneytizer.com/s/gen.js?type=2' />
                                    <Script src='//ads.themoneytizer.com/s/requestform.js?siteId=46674&formatId=2'  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}