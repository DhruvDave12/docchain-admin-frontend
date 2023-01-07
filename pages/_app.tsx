import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CustomLayout from '../components/Layout';
import AuthContextProvider from '../context/auth.context';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <AuthContextProvider>
      <CustomLayout>
        <Component {...pageProps} />
        <ToastContainer />
      </CustomLayout>
    </AuthContextProvider>
  )
}

export default MyApp
