import { createGlobalStyle } from "styled-components";
import { FullLoginMenuProvider } from '../components/customHook/fullLoginMenuProvider';

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
      <FullLoginMenuProvider>
        <Component {...pageProps} />
      </FullLoginMenuProvider>  
    </>
  );
}
