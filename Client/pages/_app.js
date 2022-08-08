import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    )
  );
}

function WalletApp({ Component, pageProps, session, router }) {
  const store = useStore((state) => state);

  return (
    <SessionProvider session={session}>
      <PersistGate persistor={store.__persistor} loading={null}>
        {/* Need to check this later */}
        {/* <Loading /> */}
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </PersistGate>
    </SessionProvider>
  );
}

export default wrapper.withRedux(WalletApp);
