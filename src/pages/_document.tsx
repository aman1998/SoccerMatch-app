// import { Html, Head, Main, NextScript } from 'next/document';
//
// export default function Document(): JSX.Element {
//   return (
//     <Html lang="en">
//       <Head>
//         <link rel="icon" type="image/png" sizes="32x32" href="public/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="public/favicon-16x16.png" />
//         <link rel="apple-touch-icon" href="public/apple-touch-icon.png" />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="192x192"
//           href="public/android-chrome-192x192.png"
//         />
//         <link rel="icon" type="image/x-icon" href="public/favicon.ico" />
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from "next/document";


/**
 * @import node modules
 * @import constants
 * @import components
 * @import common
 * @import containers
 * @import modules
 * @import store
 * @import local dir
 */

export default class CustomDocument extends Document {

  public render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="public/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="public/images/favicon-16x16.png" />
          <link rel="apple-touch-icon" href="public/images/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="public/images/android-chrome-192x192.png"
          />
          <link rel="icon" type="image/x-icon" href="public/images/apple-touch-icon.png" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

