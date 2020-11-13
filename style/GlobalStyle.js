import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

    :root{
        // Font brand
        --font-primary: 'Bebas Neue';
        --font-secondary: 'Lato', sans-serif;

        // Brand Colors
        --color-primary:#312BD9;
        --color-secondary:#FFDB3D;
        --color-secondary-light:#FFE263;

        // Neutral colors
        --color-neutral-darkest:#262626;
        --color-neutral-dark:#474747;
        --color-neutral-base:#515151;
        --color-neutral-gray-3:#5C5C5C;
        --color-neutral-gray-2:#6B6B6B;
        --color-neutral-gray:#D4D4D4;
        --color-neutral-lightest:#E9E9E9;
        --color-neutral-light:#F4F4F4;

        // Theme
        --theme-dark:#222222;
        --theme-default:#FFFFFF;

        // Basic Colors
        --color-white:#FFFFFF;
        --color-black:#000000;

    }

    *{
        font-family: var(--font-primary), cursive;
        font-size:16px;
        box-sizing:border-box;
    }

    html,body{
        margin:0;
        padding:0;
        background: ${props => props.theme ? `var(${props.theme})` : 'var(--theme-default)' };
    }

    h1,h2,h3,h4,h5,h6,a,p,ul,li,strong,span,label,i{
        margin:0;
        padding:0;
    }

    a,p,ul,li,strong,span,label,i{
        font-family:var(--font-secondary);
    }

    a{
        transition:all .16s ease-in-out;
        color:var(--color-secondary);
        font-weight:200;
        &:hover{
            cursor:pointer;
            color:var(--color-secondary-light);
        }
    }
    
`;

export default GlobalStyle;