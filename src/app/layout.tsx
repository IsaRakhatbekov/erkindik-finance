import "@/src/global/styles/_reset.scss";
import "@/src/global/styles/global.scss";
import localFont from "next/font/local";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const ibmFont = localFont({
  src: [
    {
      path: "../global/fonts/IBMPlexSerif-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/IBMPlexSerif-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ibm",
});

const interFont = localFont({
  src: [
    {
      path: "../global/fonts/Inter28pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter28pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../global/fonts/Inter18pt-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const jostFont = localFont({
  src: [
    {
      path: "../global/fonts/Jost-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../global/fonts/Jost-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jost",
});

const montserratFont = localFont({
  src: [
    {
      path: "../global/fonts/Montserrat-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrrat",
});

const nunitoFont = localFont({
  src: [
    {
      path: "../global/fonts/NunitoSans10pt-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/NunitoSans10pt-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
});

const robotoFonts = localFont({
  src: [
    {
      path: "../global/fonts/Roboto-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../global/fonts/Roboto-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

const sourceProFont = localFont({
  src: [
    {
      path: "../global/fonts/SourceCodePro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../global/fonts/SourceCodePro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sourcePro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmFont.variable} ${interFont.variable} ${jostFont.variable} ${montserratFont.variable} ${nunitoFont.variable} ${robotoFonts.variable} ${sourceProFont.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
