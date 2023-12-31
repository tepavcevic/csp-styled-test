import { HashRouter, Route, Routes } from 'react-router-dom';
import createCache from '@emotion/cache'
import {v4 as uuidv4} from 'uuid';
import Home from './pages/home';
import Contact from './pages/contact';
import Layout from './components/layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CacheProvider } from '@emotion/react';


function App() {
  const nonce = btoa(uuidv4());
  const cache = createCache({
  key: 'csp-key',
  nonce: nonce,
  prepend: true,
});

console.log("Nonce: " + nonce);

return (
    <CacheProvider value={cache}>
      <HelmetProvider>
        <Helmet>
          <meta
            httpEquiv="Content-Security-Policy"
            content={`
                    default-src 'self';
                    script-src 'self';
                    style-src 'self' 'nonce-${nonce}';
                    img-src 'self';
                    media-src 'self';
                  `}
          ></meta>
        </Helmet>
        <Layout>
          <HashRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </HashRouter>
        </Layout>
      </HelmetProvider>
    </CacheProvider>
  );
}

export default App;
