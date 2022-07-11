import { AppProps } from 'next/app';
import GlobalStyles from './styles';
import DefaultLayout from 'components/layouts/default';

export default ({ Component, pageProps }: AppProps) => (
    <DefaultLayout>
        <GlobalStyles />
        <Component {...pageProps} />
    </DefaultLayout>
);
