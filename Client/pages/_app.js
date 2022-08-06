import { wrapper } from "../store/store";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css"

function WalletApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <PersistGate persistor={store.__persistor} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(WalletApp);
