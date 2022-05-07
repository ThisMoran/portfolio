import NextNProgress from "nextjs-progressbar";
import '../styles/main.scss'

export default function myApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#4B50FF"
        startPosition={0.2}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{
          showSpinner: false
        }}
      />
      <Component {...pageProps} />
    </>
  )
}