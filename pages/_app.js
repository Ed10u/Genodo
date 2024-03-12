import { createGlobalStyle } from "styled-components";
import { FullLoginMenuProvider } from '../components/customHook/fullLoginMenuProvider';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'poppins-bold', sans-serif !important;
  padding: 0;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
