import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";
import {store } from "./store";
import LayOut from "./components/LayOut/Layout";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <Provider store={store}>
        <LayOut>
      <App/>
        </LayOut>
    </Provider>
    </BrowserRouter>

);

