import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  font-family: Inter, sans-serif;
  padding: 0;
  margin: 0;
}
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
