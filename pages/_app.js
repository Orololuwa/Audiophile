import { ThemeProvider } from "styled-components";
import Header from "layout/header";
import theme from "theme";
import GlobalStyle from "../styles/Global";
import Content from "layout/content";
import { wrapper } from "redux/store";
import Footer from "layout/footer";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
