import Layout from '../components/Layout'
import '../styles/globals.scss'
import { Provider } from "react-redux";
import configureStore from '../Redux/store/configureStore';

const store = configureStore();

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
export default MyApp

