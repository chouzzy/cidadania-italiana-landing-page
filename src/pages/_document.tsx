import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               {/* <!-- HTML Meta Tags --> */}
               <meta name="description" content="Desperte o brilho do sorriso das crianças" />
               <meta name="keywords" content="dentista" />

               {/* <!-- Facebook Meta Tags --> */}
               <meta property="og:url" content="https://www.clubedopassaporte.com/" />
               <meta property="og:type" content="website" />
               <meta property="og:title" content="Transformando sonhos em realidade: seu passaporte para a Itália está em nossas mãos." />
               <meta property="og:description" content="Somos um escritório migratório conceituado com sede em São Paulo, Lisboa e Milão. Acreditamos na desburocratização total dos processos para os nossos clientes e, por isso, cuidamos dos processos de A a Z, com intuito de conquistar a sua cidadania rapidamente e deixar todo o trabalho burocrático conosco." />
               <meta property="og:image" content="https://www.clubedopassaporte.com/static/img/logo.png" />
               <meta name="facebook-domain-verification" content="p9o4crdziw52naiebnk8mv7mj3s7pu" />

               {/* <!-- Twitter Meta Tags --> */}
               <meta name="twitter:card" content="summary_large_image" />
               <meta property="twitter:domain" content="clubedopassaporte.com" />
               <meta property="twitter:url" content="https://www.clubedopassaporte.com//" />
               <meta name="twitter:title" content="Transformando sonhos em realidade: seu passaporte para a Itália está em nossas mãos." />
               <meta name="twitter:description" content="Somos um escritório migratório conceituado com sede em São Paulo, Lisboa e Milão. Acreditamos na desburocratização total dos processos para os nossos clientes e, por isso, cuidamos dos processos de A a Z, com intuito de conquistar a sua cidadania rapidamente e deixar todo o trabalho burocrático conosco." />
               <meta name="twitter:image" content="https://www.clubedopassaporte.com/static/img/logo.png" />
               


               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@100;300;400;500;700;900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
               <link rel="shortcut icon" href="static/img/logo.png" />
               <React.Fragment>
                  {/* <!-- Facebook Pixel Code --> */}
                  <script dangerouslySetInnerHTML={{
                     __html: `!function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '1469014893670193');
               fbq('track', 'PageView');` }}
                  />
                  <noscript dangerouslySetInnerHTML={{
                     __html: `<img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=1469014893670193&ev=PageView&noscript=1" />` }}
                  />
                  {/* <!-- End Facebook Pixel Code --> */}
                  {/* <!-- Facebook Pixel Code --> */}
                  <script dangerouslySetInnerHTML={{
                     __html: `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id=AW-CODIGO'+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','AW-CODIGO');
               ` }}
                  />
                  {/* <!-- End Facebook Pixel Code --> */}
               </React.Fragment>
            </Head>
            <body>
               <noscript
                  dangerouslySetInnerHTML={{
                     __html: `
                     <iframe src="https://www.googletagmanager.com/ns.html?id=AW-CODIGO"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
                        <meta name="facebook-domain-verification" content="p9o4crdziw52naiebnk8mv7mj3s7pu" />`,
                  }}
               />
               <Main />
               <NextScript />
            </body>
         </Html >
      )
   }
}
