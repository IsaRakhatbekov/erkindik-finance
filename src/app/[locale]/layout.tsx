import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/src/i18n/routing";
import localFont from "next/font/local";
import "@/src/global/styles/_reset.scss";
import "@/src/global/styles/global.scss";
import { IContactsApiResponse } from "@/src/types/IContacts";
import { Header } from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import Head from "next/head";
import { useTransition } from "react";

const ibmFont = localFont({
  src: [
    {
      path: "../../global/fonts/IBMPlexSerif-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../global/fonts/IBMPlexSerif-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm",
  display: "swap",
  preload: true,
});

const interFont = localFont({
  src: [
    {
      path: "../../global/fonts/Inter28pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../global/fonts/Inter28pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../global/fonts/Inter18pt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../global/fonts/Inter18pt-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../global/fonts/Inter18pt-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../global/fonts/Inter18pt-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jostFont = localFont({
  src: [
    {
      path: "../../global/fonts/Jost-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../global/fonts/Jost-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

const montserratFont = localFont({
  src: [
    {
      path: "../../global/fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../global/fonts/Montserrat-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrrat",
  display: "swap",
  preload: true,
});

const nunitoFont = localFont({
  src: [
    {
      path: "../../global/fonts/NunitoSans10pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../global/fonts/NunitoSans10pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
});

const robotoFonts = localFont({
  src: [
    {
      path: "../../global/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../global/fonts/Roboto-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../global/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../global/fonts/Roboto-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});

const sourceProFont = localFont({
  src: [
    {
      path: "../../global/fonts/SourceCodePro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../global/fonts/SourceCodePro-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sourcePro",
  display: "swap",
  preload: true,
});
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const metaMessages = messages.Meta as Record<string, string>;

  let contactsData: IContactsApiResponse["data"] = {
    phone: "lorem ipsum",
    email: "lorem ipsum",
    address: "lorem ipsum",
    addressLink: "lorem ipsum",
    schedule: "lorem ipsum",
    googleMapsLink: "lorem ipsum",
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/contact?locale=${locale}`
    );
    if (res.ok) {
      const response: IContactsApiResponse = await res.json();
      contactsData = response.data;
    }
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }

  return (
    <html
      lang={locale}
      className={`${ibmFont.variable} ${interFont.variable} ${jostFont.variable} ${montserratFont.variable} ${nunitoFont.variable} ${robotoFonts.variable} ${sourceProFont.variable}`}
    >
      <Head>
        <title>{metaMessages.title}</title>
        <meta name="description" content={metaMessages.description} />
        <link rel="preload" as="image" href="/images/heroBg.webp" />
        <link rel="preload" href="/css/5b1712d1e4f276dd.css" as="style" />
        <link rel="stylesheet" href="/css/5b1712d1e4f276dd.css" />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header phone={contactsData?.phone} />
          <main>{children}</main>
          <Footer data={contactsData} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
