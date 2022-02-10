
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


const CacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  
const Rtl = (props) => {
  return ( 
   
      <CacheProvider value={CacheRtl}>{props.children}</CacheProvider>
  
   );
}
 
export {Rtl};


