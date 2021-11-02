import '../styles/globals.css'
import EveryPage from '../components/EveryPage'

function MyApp({ Component, pageProps }) {
  return (

    <EveryPage>
       <Component {...pageProps} />
    </EveryPage>

  )
  
  
 
}

export default MyApp
