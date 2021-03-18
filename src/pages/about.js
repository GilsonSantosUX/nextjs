import { Display, Link } from '../style/Typography';
import GlobalStyle from '../style/GlobalStyle';

import Header from '../components/Header';

function About(){
    return (
        <>
            <Header title="About"/>
            <Display center >About</Display>
            <Link href="/">Back</Link>
            <GlobalStyle/>
        </>
    )
}

export default About;