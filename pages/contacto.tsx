import SeoMetaTags from '../components/SeoMetaTags'

export default function Contacto () {
  return (
    <div className='container mt-3'>

      <SeoMetaTags params={{
        type: 'section',
				title: 'Contacto - FM Riel',
				description: 'Información de contacto',
				path: 'https://rielfm.com.ar/contacto',
        image: 'https://rielfm.com.ar/img/og-images/contacto.png'
      }} />

      <div className='row'>
        <div className='col-lg-10 mx-auto'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='h2 mb-3'>Contacto</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}