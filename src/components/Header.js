import Head from 'next/head';

function Header(props){
    return (
        <Head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{ props.title ? props.title : 'Gilson Santos' }</title>
            <meta property="og:title" content="Gilson Santos UX" key="title" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-G5YBNBNZ3N"></script>
            <script async src="../src/analytics/analytics.js"></script>
        </Head>
    )
}

export default Header;