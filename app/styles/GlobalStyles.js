'use client'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Dark Black Theme Colors */
    --primary-color: #000000;
    --primary-light: #1a1a1a;
    --accent-color: #ffffff;
    --accent-light: #f0f0f0;
    --accent-gradient: linear-gradient(135deg, #ffffff, #e0e0e0);
    
    /* Dark Theme Greys */
    --brand-grey: #000000;
    --text-dark: #ffffff;
    --text-secondary: #b0b0b0;
    --text-muted: #808080;
    --text-inverse: #ffffff;
    
    /* Dark Backgrounds */
    --background-dark: #000000;
    --background-darker: #0a0a0a;
    --background-light: #1a1a1a;
    --background-card: rgba(26, 26, 26, 0.8);
    --background-glass: rgba(255, 255, 255, 0.03);
    
    /* Premium Effects */
    --shadow-color: rgba(0, 0, 0, 0.5);
    --shadow-premium: 0 20px 40px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 30px rgba(255, 255, 255, 0.1);
    --border-radius: 12px;
    --border-radius-lg: 16px;
    --max-width: 1200px;
    
    /* Glass Effect */
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
  }

  body {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background: var(--background-darker);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  .container-2 {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .container-3 {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .container-4 {
    max-width: 940px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .button-primary {
    background: white;
    color: black;
    padding: 0 32px;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 160px;
    height: 50px;
    line-height: 1;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
      transition: left 0.5s;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
      background: #f0f0f0;
      
      &::before {
        left: 100%;
      }
    }
  }

  .button-secondary {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    color: var(--text-dark);
    padding: 0 32px;
    border: 2px solid var(--glass-border);
    border-radius: var(--border-radius);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 160px;
    height: 50px;
    line-height: 1;
    box-sizing: border-box;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
      transform: translateY(-2px);
      box-shadow: var(--shadow-premium);
    }
  }

  .button-grey {
    background: var(--background-light);
    color: var(--text-dark);
    padding: 0 32px;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 160px;
    height: 50px;
    line-height: 1;
    box-sizing: border-box;

    &:hover {
      background: var(--primary-light);
      transform: translateY(-2px);
      box-shadow: var(--shadow-premium);
    }
  }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-premium);
  }

  .shadow-premium {
    box-shadow: var(--shadow-premium);
  }

  .shadow-glow {
    box-shadow: var(--shadow-glow);
  }

  .c-align {
    text-align: center;
  }

  .l-align {
    text-align: left;
  }

  .white {
    color: var(--text-dark);
  }

  .black {
    color: var(--text-inverse);
  }

  .grey {
    color: var(--text-muted);
  }

  .margin-bottom-24px {
    margin-bottom: 24px;
  }

  /* Responsive breakpoints */
  @media (max-width: 991px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    .container, .container-2, .container-3, .container-4 {
      padding: 0 1.5rem;
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    .button-primary, .button-secondary, .button-grey {
      padding: 0 24px;
      font-size: 0.9rem;
      min-width: 140px;
      height: 44px;
    }
  }

  @media (max-width: 479px) {
    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .container, .container-2, .container-3, .container-4 {
      padding: 0 1rem;
    }
  }
`;