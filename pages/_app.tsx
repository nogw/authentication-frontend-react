import { createGlobalStyle, ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'; 
NProgress.configure({ showSpinner: false });

import 'nprogress/nprogress.css'; 
import { AuthProvider } from '../context/AuthContext';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    color: #212121;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: hidden;
  }

  #nprogress {
    .bar {
      background: #0c63bd !important;
      height: 4px;
    }

    .peg {
      box-shadow: 0 0 0px #fff, 0 0 0px #fff;
    }
  }

  @media screen and (max-width: 600px) {
    #nprogress {
      .bar {
        background: #fff !important;
      }
    }
  }
`

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  )
}
