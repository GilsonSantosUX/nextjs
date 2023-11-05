import Head from 'next/head';

function Header(props){
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{ props.title ? props.title : 'Gilson Santos' }</title>
            <meta property="og:title" content="Gilson Santos UX" key="title" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5YBNBNZ3N"></script>
            <script async src="../src/analytics/analytics.js"></script>
            <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "jlu3ebbd7z");
            </script>
        </Head>
    )
}

export default Header;
