import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/configureStore';


import HelloReactRails from "./HelloReactRails";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HelloReactRails />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App
