import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'



function MyApp({ Component, pageProps }: AppProps) {

  

  return (
      
        <AuthProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
        <Component {...pageProps} />
        </AuthProvider>
      
    
    
  
  )
}

export default MyApp
