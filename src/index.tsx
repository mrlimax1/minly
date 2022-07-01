import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'
import './styles/index.sass'
import {HistoryProvider} from "./provider/HistoryProvider";
import Redirect from './components/redirect';




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {window.location.href.split('/')[3] ?
        <Redirect/>
        :
        <HistoryProvider>
          <App/>
        </HistoryProvider>
    }

  </ React.StrictMode >

);

