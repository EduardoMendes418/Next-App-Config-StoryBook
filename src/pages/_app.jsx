import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import P from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

MyApp.proTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};
