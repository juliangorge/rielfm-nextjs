import { showAd } from '../helpers'
import Script from 'next/script'

const SectionAside = () => {
    return (
        <aside>
            {showAd('/img/ads/donar-sangre.gif', 'https://portal.entrerios.gov.ar/inicio')}

            <div className='dynamic-ad'>
                <div id='46674-2'>
                    <Script src='//ads.themoneytizer.com/s/gen.js?type=2' />
                    <Script src='//ads.themoneytizer.com/s/requestform.js?siteId=46674&formatId=2'  />
                </div>
            </div>
        </aside>
    )
}
    
export default SectionAside