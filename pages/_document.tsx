import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText, globalCss } from '../stitches.config'

const globalStyles = globalCss({
  body: { fontFamily: '$system', padding: 0, margin: 0 }
})

export default function MyDocument() {
  globalStyles()

  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
