import "@/src/global/styles/_reset.scss";
import "@/src/global/styles/global.scss";
import localFont from "next/font/local";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { IContactsApiResponse } from "../types/IContacts";

const ibmFont = localFont({
  src: [
    {
      path: "../global/fonts/IBMPlexSerif-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/IBMPlexSerif-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm",
  preload: false,
});

const interFont = localFont({
  src: [
    {
      path: "../global/fonts/Inter28pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter28pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-SemiBold.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  preload: false,
});

const jostFont = localFont({
  src: [
    {
      path: "../global/fonts/Jost-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Jost-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jost",
  preload: false,
});

const montserratFont = localFont({
  src: [
    {
      path: "../global/fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Montserrat-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrrat",
  preload: false,
});

const nunitoFont = localFont({
  src: [
    {
      path: "../global/fonts/NunitoSans10pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/NunitoSans10pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  preload: false,
});

const robotoFonts = localFont({
  src: [
    {
      path: "../global/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Roboto-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Roboto-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  preload: false,
});

const sourceProFont = localFont({
  src: [
    {
      path: "../global/fonts/SourceCodePro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/SourceCodePro-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sourcePro",
  preload: false,
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let contactsData: IContactsApiResponse["data"] = {
    phone: "lorem ipsum",
    email: "lorem ipsum",
    address: "lorem ipsum",
    addressLink: "lorem ipsum",
  };
  try {
    const res = await fetch(`${process.env.API_URL}/api/contact`);
    if (!res.ok) {
      throw new Error("Failed to fetch contacts");
    }

    const response: IContactsApiResponse = await res.json();
    contactsData = response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
  return (
    <html
      lang="en"
      className={`${ibmFont.variable} ${interFont.variable} ${jostFont.variable} ${montserratFont.variable} ${nunitoFont.variable} ${robotoFonts.variable} ${sourceProFont.variable}`}
    >
      <body>
        <Header phone={contactsData.phone} />
        <main>{children}</main>
        <Footer data={contactsData} />
      </body>
    </html>
  );
}
