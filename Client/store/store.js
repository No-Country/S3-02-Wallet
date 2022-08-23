import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./sync_storage";

import users from "./usersSlice";
import counter from "./countSlice";
import dropdown from "./dropdownSlice";
import profile from "./profileSlice";
import footer from "./footerSlice";

const { persistStore, persistReducer } = require("redux-persist");

const combinedReducers = combineReducers({
  counter,
  users,
  dropdown,
  profile,
  footer,
});

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["counter", "users"],
  blacklist: ["dropdown", "profile", "footer"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

const makeStore = ({ isServer }) => {
  if (isServer) {
    return configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
  } else {
    const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore);
