import '@/styles/globals.css'
import Head from 'next/head'


const App = ({ Component, pageProps }) => {

  return (
    <>
          <Component {...pageProps} />
    </>
)
}
export default App
