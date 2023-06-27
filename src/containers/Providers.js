import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import Theme from "../theme";
import { store } from "../store";

const Providers = ({ children }) => {
  return (
    <Providers store={store}>
      <PersistGate loading>
        <Theme>{children}</Theme>
      </PersistGate>
    </Providers>
  );
};

export default Providers;
