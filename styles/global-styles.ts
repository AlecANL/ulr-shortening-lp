import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --baseFont: system-ui;
        --mobile-mainHeadlineBold: bold 2.625rem / 3rem var(--baseFont);
        --mobile-headLineTwoBold: bold 1.75rem / 3rem var(--baseFont);
        --mobile-body1SBold: 500  1.125rem / 1.875rem var(--baseFont);
        --desktop-mainHeadlineBold: bold 5rem / 5.625rem var(--baseFont);
        --desktop-body1SBold: 500  1.375rem / 2.25rem var(--baseFont);
        --desktop-headLineTwoBold: bold 2.5rem / 3rem var(--baseFont);
        --soft-gray: #eff1f7;
        --just-white:#fff;
        --dark-purple: #3a3054;
        --just-cyan: #2bd0d0;
        --bg-footer: #232127;
        --txt-footer-color: #BFBFBF;

    }
    body {
        margin: 0;
        outline: 1px solid green;
        min-block-size: 100vh;
        font-family: var(--baseFont);
        /* background-color: blue; */
    } 
    ul,a,p,h1 {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style-type: none;
    }
    /* img {
        max-inline-size: 100%;
    } */
    a {
        text-decoration: none;
    }
    .wrapper {
        max-inline-size: 1110px;
        margin: auto;
    }


`;
