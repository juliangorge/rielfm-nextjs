import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link href='//cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65' crossOrigin='anonymous' />
            <link href='//cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css' rel='stylesheet' />
            <link href='/img/favicon.svg' rel='icon' />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}