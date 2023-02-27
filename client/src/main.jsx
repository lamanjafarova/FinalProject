import React from 'react'
import ReactDOM from 'react-dom/client'
// import { applyMiddleware, createStore } from "redux";
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import { rootReducer } from './redux/reducer';
// import thunk from "redux-thunk";
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/store'


// const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </ChakraProvider>
  </BrowserRouter>
</React.StrictMode>,
)
