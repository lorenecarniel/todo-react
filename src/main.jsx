import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import './styles/index.css';
// import { Test } from './Test';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>,
);
