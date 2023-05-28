import SeoMetaTags from './SeoMetaTags'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import { showAd } from '../helpers'
import React, { useState } from 'react'

export default function Lluvias() {
    const [city_id, setCityId] = useState(1)
    const Calendar = dynamic(() => import('./Calendar.js'), {
        ssr: false
    })

    return (
        <>
            <SeoMetaTags params={{
                type: 'section',
                title: 'Lluvias - FM Riel',
                description: 'Información lluvias',
                path: 'https://rielfm.com.ar/lluvias',
                image: 'https://rielfm.com.ar/img/og-images/lluvias.png'
            }} />

            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row'>
							<div className='col-lg-8 column'>
                                <h1 className='h2 mb-3'>Lluvias</h1>
								<hr />
                                <small>Seleccione la ciudad</small>
                                <select name='city_id' className='form-control form-control-sm mb-3'
                                onChange={async(e) => {
                                    const { value } = e.currentTarget
                                    setCityId(value)
                                }}>
                                    <option value={1}>Basavilbaso</option>
                                    <option value={2}>Gilbert</option>
                                    <option value={3}>Libaros</option>
                                    <option value={4}>Rocamora</option>
                                    <option value={5}>San Marcial</option>
                                    <option value={6}>Santa Anita</option>
                                    <option value={7}>Vila Mantero</option>
                                </select>
								<Calendar city_id={city_id} />
							</div>
							<div className='col-lg-4'>
                                {showAd('/img/ads/gcagro.png', 'https://gcagro.com.ar')}

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
        </>
    )
}