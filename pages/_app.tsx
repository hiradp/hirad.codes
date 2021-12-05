import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <div className='markdown-body'><Component {...pageProps} /></div>;
}
export default MyApp;
