import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";
import { Provider } from "react-redux";
import {store} from './store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </Provider>
  );
};
