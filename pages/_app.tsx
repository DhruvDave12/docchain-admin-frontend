import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CustomLayout from '../components/Layout';
function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  )
}

export default MyApp
