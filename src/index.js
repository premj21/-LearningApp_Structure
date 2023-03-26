import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
 </BrowserRouter>
);


