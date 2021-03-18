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

    @font-face {
        font-family: var(--font-primary);
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        // src: url('Inter-roman.var.woff2') format('woff2');
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

const GlobalTheme = createGlobalStyle`
    // Define variables context

:root {
	// Font family -------------------------------------------------------- //
	--font-family-primary: "";
	--font-family: "Open Sans", sans-serif;

	// Tag - h1,h2,h3,h4,h5,h6 -------------------------------------------- //
	--font-headline-x1: 4.209rem;
	--font-headline-x2: 3.157rem;
	--font-headline-x3: 2.369rem;
	--font-headline-x4: 1.777rem;
	--font-headline-x5: 1.333rem;
	--font-headline-x6: 1rem;

	// Hierarchy from font ----------------------------------------------- //
	--font-display: 5.61rem;
	--font-heading: 4.209rem;
	--font-subheading: 0.75rem;
	--font-paragraph: 1rem;
	--font-body: 1rem;
	--font-lead: 0.889rem;
	--font-blockquotes: 1.333rem;
	--font-captalize: 1rem;
	--font-small: 0.563rem;
	--font-tiny: 0.563rem;

	// Weight ----------------------------------------------------------- //
	--font-weight-light: 300;
	--font-weight-regular: 400;
	--font-weight-subbold: 600;
	--font-weight-bold: 700;
	--font-weight-extra: 800;

	// Line Height ------------------------------------------------------ //
	--font-line-height: 1.75;
	--font-line-height-headline: 1.3;

	// Scale in size 8 point: 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 - //
	--scale-xxextra: 80px;
	--scale-xxetra: 72px;
	--scale-extra: 64px;
	--scale-xxbig: 56px;
	--scale-xbig: 48px;
	--scale-big: 40px;
	--scale-xxlarge: 32px;
	--scale-xlarge: 24px;
	--scale-large: 16px;
	--scale-medium: 8px;
	--scale-small: 4px;
	--scale-xsmall: 2px;
	--scale-xxsmall: 1px;
	--scale-none: 0px;

	// Scale in Radius -------------------------------------------------- //
	--radius-xxbig: var(--scale-xxbig);
	--radius-xbig: var(--scale-xbig);
	--radius-big: var(--scale-big);
	--radius-xxlarge: var(--scale-xxlarge);
	--radius-xlarge: var(--scale-xlarge);
	--radius-large: var(--scale-large);
	--radius-medium: var(--scale-medium);
	--radius-small: var(--scale-small);
	--radius-xsmall: var(--scale-xsmall);
	--radius-xxsmall: var(--scale-xxsmall);
	--radius-none: 0px;

	// Style in border -------------------------------------------------- //
	--border-solid: solid;
	--border-dashed: dashed;

	// Width in border -------------------------------------------------- //
	--border-light: 1px;
	--border-bold: 2px;
	--border-extra: 3px;

	//Theme Colors ------------------------------------------------------ //
	--color-brand-primary: #ff4000;
	--color-brand-secondary: #343a40;

	// Base Colors ------------------------------------------------------ //
	--color-principal-dark: #323232;
	--color-principal-light: #ffffff;
	--color-principal-foreground: #f7f7f7;

	// Primary ---------------------------------------------------------- //
	--color-primary-gradient: linear-gradient(270deg, #ff4000 0%, #cc3200 100%);
	--color-primary-darkest: #661a00;
	--color-primary-dark: #cc3200;
	--color-primary-base: #ff4000;
	--color-primary-light: #ffb399;
	--color-primary-lightest: #ffece5;

	// Secondary -------------------------------------------------------- //
	--color-secondary-gradient: linear-gradient(270deg, #343a40 0%, #505962 100%);
	--color-secondary-darkest: #2e3338;
	--color-secondary-dark: #505962;
	--color-secondary-base: #343a40;
	--color-secondary-light: #c7ccd1;
	--color-secondary-lightest: #f1f2f4;

	// Neutral Colors -------------------------------------------------- //
	--color-neutral-gradient: linear-gradient(270deg, #777777 0%, #333333 100%);
	--color-neutral-darkest: #333333;
	--color-neutral-dark: #666666;
	--color-neutral-base: #777777;
	--color-neutral-light: #999999;
	--color-neutral-lightest: #cccccc;

	// Semantic Colors ------------------------------------------------- //

	// Informative ----------------------------------------------------- //
	--color-semantic-informative-gradient: linear-gradient(
		270deg,
		#00aaff 0%,
		#0077b2 100%
	);
	--color-semantic-informative-darkest: #004466;
	--color-semantic-informative-dark: #0077b2;
	--color-semantic-informative-base: #00aaff;
	--color-semantic-informative-light: #99ddff;
	--color-semantic-informative-lightest: #e5f6ff;

	// Negative -------------------------------------------------------- //
	--color-semantic-negative-gradient: linear-gradient(
		270deg,
		#ff2e00 0%,
		#b21e00 100%
	);
	--color-semantic-negative-darkest: #661100;
	--color-semantic-negative-dark: #b21e00;
	--color-semantic-negative-base: #ff2e00;
	--color-semantic-negative-light: #ffaa99;
	--color-semantic-negative-lightest: #ffeae5;

	// Notice ---------------------------------------------------------- //
	--color-semantic-notice-gradient: linear-gradient(
		270deg,
		#ffb800 0%,
		#b28000 100%
	);
	--color-semantic-notice-darkest: #664900;
	--color-semantic-notice-dark: #b28000;
	--color-semantic-notice-base: #ffb800;
	--color-semantic-notice-light: #ffe299;
	--color-semantic-notice-lightest: #fff8e5;

	// Positive ------------------------------------------------------- //
	--color-semantic-positive-gradient: linear-gradient(
		270deg,
		#00ff0a 0%,
		#00b206 100%
	);
	--color-semantic-positive-darkest: #006603;
	--color-semantic-positive-dark: #00b206;
	--color-semantic-positive-base: #00ff0a;
	--color-semantic-positive-light: #99ff9c;
	--color-semantic-positive-lightest: #e5ffe6;

	// Width Main
	--width-fullscreen: 100%;
	--width-medium: 1280px;
	--width-small: 936px;
	--width-main: 936px;

}

`;

export default GlobalStyle;