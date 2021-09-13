import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Layout } from './utility/context/Layout'; 
import { store } from './redux/storeConfig/store';
// import img from '../src/assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/material-dashboard.css'; 
import './assets/demo/demo.css';  
const LazyApp = lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      fallback={
        // <img src={"img"} style={{ width: '100px' }} />
        <h2>Loading</h2>
      }
    > 
      <LazyApp /> 
    </Suspense>
  </Provider >
  ,
  document.getElementById('root'));
reportWebVitals();

