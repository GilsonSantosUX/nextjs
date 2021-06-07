import styled from 'styled-components';

const Display = styled.h1`
    font-family:${props => props.primary ? "var(--font-primary)":"var(--font-accent)"};
    font-size:3rem;
    color:${props => props.white ? "var(--theme-default)" : "var(--theme-dark)"};
    line-height:3.75rem;
    text-align: ${props => props.center ? "center" : "left"};
    font-weight:${props => props.weight ? props.weight  : 400};
    background:var(--color-gradient);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    &:before{
        -webkit-text-fill-color:transparent;
    }
`;

const Subdisplay = styled.p`
    color: ${props => props.white ? "var(--color-neutral-6)" : "var(--color-neutral-5)"};
    font-weight:300;
    font-size:1.2rem;
    text-align: ${props => props.center ? "center" : "left"};
    background: ${props => props.bg};
`;

const Heading = styled.p`
    color: ${props => props.white ? "var(--color-neutral-6)" : "var(--color-neutral-5)"};
    font-weight:300;
    font-size:2rem;
    text-align: ${props => props.center ? "center" : "left"};
    background: ${props => props.bg};
`;

const Link = styled.a`
    padding:4px 2px;
`;

const BodyHighlight = styled.p`
    color: ${props => props.color};
    font-size:1rem;
    line-height:135%;
    text-align: ${props => props.align};
    font-weight:300;
    max-width:520px;
    white-space:pre-wrap;

`;

const Detail = styled.p`
    font-size:.85rem;
    line-height:125%;
    font-weight:${props => props.weight ? props.weight : 400};

    font-family:${props => props.font ? prop.font : "var(--font-accent)"};
    color: var(${props => props.color ? props.color : "--theme-default"});
    
    
    text-align: ${props => props.align};
    max-width:520px;
    white-space:pre-wrap;

`;

const Container = styled.div`
    max-width:72rem;
    display:flex;
    flex-direction:column;
    gap:2rem;

    padding-top:8rem;
    box-sizing:border-box;

`;

export { Display, Subdisplay, Link, Heading, BodyHighlight, Detail, Container };