import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import './styles/index.css';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>,
);
