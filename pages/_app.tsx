
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { IntlProvider, useIntl } from "react-intl";
import '../styles/globals.css'
type Locale = "az" | "en" | "ru";
import { AppProps } from 'next/app';
import Head from "next/head";

const messages: Record<Locale, Record<string, string>> = {
  "az": require("../public/languages/az.json"),
  "en": require("../public/languages/en.json"),
  "ru": require("../public/languages/ru.json"),
};
function getDirection(locale: Locale): string {
  return "ltr";
}
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { locale } = useRouter();
  const validatedLocale = locale as Locale;

  return (
    <>
      <Head>
        <link rel="alternate" href="https://webconsole.az" hrefLang="x-default" />
        <link rel="alternate" href="https://webconsole.az/az" hrefLang="az" />
        <link rel="alternate" href="https://webconsole.az/" hrefLang="en" />
        <link rel="alternate" href="https://webconsole.az/az" hrefLang="ru" />
      </Head>
      <IntlProvider locale={validatedLocale} messages={messages[validatedLocale] || {}}>

          <Component {...pageProps} dir={getDirection(validatedLocale)} />
     
      </IntlProvider>
    </>
  );
};

export default MyApp;