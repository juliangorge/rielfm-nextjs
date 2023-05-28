import Script from 'next/script'
import React, { useEffect } from 'react';
import SeoMetaTags from '../components/SeoMetaTags';

export default function Vivo () {

  useEffect(() => {
    const radio = document.getElementById('radio') as HTMLAudioElement
    if(radio != null) {
      radio.play().catch((error) => {
        document.addEventListener('click', () => {
          radio.play()
        }, {once: true})
      });
    }
  }, []);

  return (
    <div className='container mt-3'>

      <SeoMetaTags params={{
        type: 'section',
				title: 'Escuchanos en vivo - FM Riel',
				description: 'Radio en vivo las 24 horas',
				path: 'https://rielfm.com.ar/vivo',
				image: 'https://rielfm.com.ar/img/og-images/vivo.png'
      }} />

      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='h2 mb-3'>Escuchanos en vivo</h1>

              <div className='text-center'>
                <audio id='radio' controls autoPlay>
                  <source src='//rielfm.com.ar/reproductor' type='audio/mpeg' />
                </audio>
              </div>
            </div>
          </div>
          <div className='dynamic-ad my-2'>
            <div className='text-center' id='46674-28'>
              <Script src='//ads.themoneytizer.com/s/gen.js?type=28' />
              <Script src='//ads.themoneytizer.com/s/requestform.js?siteId=46674&formatId=28' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}