import Layout from '../component/Layout';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footerpath from '@/component/Footerpath';
import { Provider } from 'react-redux';
import { store } from '@/Redux/app/store';

export default function App({ Component, pageProps }) {
   return (
      <Provider store={store}>
      <Layout>
         <Component {...pageProps}/>
         <Footerpath/>
           <div class="drop-link">
             <a class="drop-up-button" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">&#8648;</a>
           </div>
      </Layout>
      </Provider>
   )

}