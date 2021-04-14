// import {useRouter } from 'next/router'
import styled from 'styled-components'


import GlobalStyle from '../../style/GlobalStyle';

const Main = styled.main`
    width:100%;
    height:100vh;
    background:var(--color-primary);
    box-sizing:border-box;
    margin:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:3.2rem;
    font-weight:700;
    color:var(--color-white);
    font-family: var(--font-primary);
`;

export async function getStaticPaths(){
    return{
        paths: [
            {
                params:{
                    id:'1'
                }
            },{
                params:{
                    id:'2'
                }
        }],
        fallback:false // blocking - true
    }
}

// export async function getServerSideProps(context){
//     const id = context.query.id

//     return {
//         props:{ id }
//     }
// }

export async function getStaticProps(context){
    const id = context.params.id;

    return {
        props:{ id }
    }
}

function Case(props) {
    // const router = useRouter();
    // const id = router.query.id;
    return (
            <>
                <Main>Id do case: {props.id}</Main>
                <GlobalStyle theme="--theme-dark"/>
            </>
            )
}

export default Case;


