import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Provider>
  );
}

export default MyApp;
