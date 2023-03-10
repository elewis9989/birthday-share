import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppProps } from 'next/app';

import { api } from '~/utils/api';

import { type NextPage } from 'next';
import { type ReactElement, type ReactNode } from 'react';
import '~/styles/globals.css';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <SessionProvider session={session as Session | null}>
      {layout}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
