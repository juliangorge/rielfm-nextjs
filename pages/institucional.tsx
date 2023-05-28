import SeoMetaTags from '../components/SeoMetaTags'

export default function Institucional () {
  return (
    <>

      <SeoMetaTags params={{
        type: 'section',
				title: 'Institucional - FM Riel',
				description: 'Información institucional',
				path: 'https://rielfm.com.ar/institucional',
        image: 'https://rielfm.com.ar/img/og-images/institucional.png'
      }} />

      <div className='container mt-3'>
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='h2 mb-3'>Institucional</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}