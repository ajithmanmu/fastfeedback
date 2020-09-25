import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { AuthProvider } from '@/lib/auth';
import customTheme from '@/styles/theme';
import { Global, css } from '@emotion/core';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MyApp;
