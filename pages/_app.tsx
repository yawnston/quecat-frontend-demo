import '../styles/globals.css'
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import DashboardLayout from '../components/dashboardLayout';


const clientSideEmotionCache = createEmotionCache();

type CustomAppProps = AppProps & {
  emotionCache: EmotionCache
}

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) {

  return <CacheProvider value={emotionCache}>
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  </CacheProvider>
}

export default MyApp
