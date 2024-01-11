import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
        <meta property="og:url" content="https://artsy-fr.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ARTSY | Photography is poetry" />
        <meta property="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="ARTSY is a design art e-commerce website developed as part of a hackathon, with the goal of creating a platform that connects artists with art lovers and facilitates the purchase of unique artworks online. The project focused on providing a seamless and visually engaging shopping experience for users while supporting artists in showcasing and selling their creations."
        />
        <meta
          property="og:image"
          content={"https://artsy-fr.vercel.app/artsy.jpg"}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
