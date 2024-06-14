import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
import Script from 'next/script'



// const FB_PIXEL_ID = '700239298517091'
const FB_PIXEL_ID = '700239298517091'

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter()
   useEffect(() => {
      import('react-facebook-pixel')
         .then((x) => x.default)
         .then((ReactPixel) => {
            ReactPixel.init(`${FB_PIXEL_ID}`)
            ReactPixel.pageView()

            router.events.on('routeChangeComplete', (url) => {
               if (url === '/obrigado-whatsapp') {
                  ReactPixel.pageView()
                  ReactPixel.fbq('track', 'Lead');
               } else {
                  ReactPixel.pageView()
               }
            })
         })
   }, [router.events])
   return (
      <>
         {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=GTM-NX33MD3C"></Script>

         <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html:
               `
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-NX33MD3C');
         `}}>
         </Script> */}
         {/* <Script id="B242GA-tag-scrpits" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
               (function(w,d,u){
               var s=d.createElement('script');s.async=true;s.defer=true;s.src=u+'?'+(Date.now()/60000|0);
               var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
               })(window,document,'https://67p.b242ga.ru/static/js/b242ga.js');
               
               // Certifique-se de que o script B242GA está carregado antes de chamar B242GAInit
               function checkAndInitB242GA() {
               if (typeof B242GAInit === 'function') {
                  B242GAInit({
                     portal:'https://clubedopassaporte.bitrix24.com.br/',
                     pid:'b4b741b89d40f823c6e4c3ca25cd6982',
                     presets:{}
                  });
               } else {
                  setTimeout(checkAndInitB242GA, 100); // Verificar novamente após 100ms
               }
               }
               checkAndInitB242GA(); 
    `,
         }}>
         </Script> */}
{/* 
         BITRIX
         <Script
            id="bitrix24-form" // Adicione um ID para facilitar a identificação e gerenciamento
            strategy="afterInteractive" // Garante que o script seja executado após a renderização inicial do conteúdo
            dangerouslySetInnerHTML={{
               __html: `
        (function(w,d,u){
          var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
          var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn.bitrix24.com.br/b27154285/crm/form/loader_109.js');
      `,
            }}
            data-b24-form="inline/109/pac0ng" // Mantém os atributos originais
            data-skip-moving="true"
         /> */}

         {/* <!-- End Google Tag Manager --> */}

         <ChakraProvider theme={theme}>
            <Global
               styles={`...`}
            />
            <Component {...pageProps} />
         </ChakraProvider>
      </>
   )
}

export default MyApp