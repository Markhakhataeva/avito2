import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {App} from './components/App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/configureStore";
import {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>

);
