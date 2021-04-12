import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Store';

import '../sass/main.scss'

import Header from './Components/Header/Header';
import ProductListPage from './Pages/ProductListPage';


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ProductListPage />
    </Provider>
  );
};

export default App;