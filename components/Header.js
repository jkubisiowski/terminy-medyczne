import Head from "next/head";

function Header(props) {
    return (
        <>
        <Head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <title>Terminy medyczne</title>
          <link rel="icon" type="image/png" href="/image/favicon-bg.png"/>
          <link rel="stylesheet" href="/plugins/bootstrap-4.3.1/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="/plugins/meanmenu/meanmenu.css"/>
          <link rel="stylesheet" href="/fonts/ep-icon-fonts/css/style.css"/>
          <link rel="stylesheet" href="/fonts/fontawesome-5/css/all.min.css"/>
          <link rel="stylesheet" href="/css/settings.css"/>
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" type="text/css" href="https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.css"/>
          {process.env.NODE_ENV === 'production' && (
            <>
              <script id="mcjs"
              dangerouslySetInnerHTML={{
                __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/2754d6c462eeb3e54d2f33073/206ba6fc47eb8ad6d7867699d.js");`,
              }}
            />
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172432228-1"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
  
            gtag('config', 'UA-172432228-1');
                `,
                }}
              />
              <script src="https://cdn.wpcc.io/lib/1.0.2/cookieconsent.min.js"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.addEventListener("load", function(){window.wpcc.init({"border":"thin","corners":"small","colors":{"popup":{"background":"#f8f8f8","text":"#000000","border":"#1290a4"},"button":{"background":"#1290a4","text":"#ffffff"}},"position":"top","content":{"href":"https://terminymedyczne.pl/polityka-prywatnosci","button":"Zgadzam się","link":"Czytaj więcej...","message":"W ramach witryny stosujemy pliki cookies. W każdej chwili można dokonać zmiany ustawień dotyczących cookies w swojej przeglądarce. "}})});
                `,
                }}
              />
            </>)}
        </Head>
        </>
        )
    }
    
    export default Header