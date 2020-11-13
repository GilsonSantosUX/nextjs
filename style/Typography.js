import styled from 'styled-components';

const Display = styled.h1`
    font-size:3rem;
    color:${props => props.white ? "var(--color-white)" : "var(--color-neutral-dark)"};
    line-height:3.75rem;
    text-align: ${props => props.center ? "center" : "left"};
    font-weight:500;
`;

const Subdisplay = styled.p`
    color: ${props => props.white ? "var(--color-white)" : "var(--color-black)"};
    font-weight:300;
    font-size:1.2rem;
    text-align: ${props => props.center ? "center" : "left"};
    background: ${props => props.bg};
`;

const Heading = styled.p`
    color: ${props => props.white ? "var(--color-white)" : "var(--color-black)"};
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
    color: ${props => props.color};
    font-size:.85rem;
    line-height:125%;
    font-weight:200;
    text-align: ${props => props.align};
    max-width:520px;
    white-space:pre-wrap;

`;

export { Display, Subdisplay, Link, Heading, BodyHighlight, Detail };