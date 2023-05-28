import Head from 'next/head'
import Script from 'next/script'

const SeoMetaTags = (params) => {
    const values = params.params

    return (
        <>
            <Head>
                <title>{values.title}</title>
                <meta property='og:url' content={values.path} />
                <meta property='og:type' content={values.type} />
                {values.section != null ? <meta property='og:section' content={values.section} /> : ''}
                <meta property='og:title' content={values.title} />
                <meta property='og:description' content={values.description} />
                <meta property='og:image' content={values.image} />
                <meta name='twitter:title' content={values.title} />
                <meta name='twitter:description' content={values.description} />
                <meta name='twitter:image' content={values.image} />
                <meta property='fb:app_id' content={process.env.FACEBOOK_APP_ID} />
                
            </Head>
            <Script src='/js/themoneytizer-cmp.js' type='text/javascript' async={true} />
        </>
    )
}
    
export default SeoMetaTags