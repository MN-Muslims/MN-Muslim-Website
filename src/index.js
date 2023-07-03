import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import { BusinessContextProvider } from './context/BusinessContext.js';
import { CarouselContextProvider } from './context/CarouselContext.js';
import { ImageContextProvider } from './context/ImageContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BusinessContextProvider>
      <CarouselContextProvider>
        <ImageContextProvider>
          <Routing />
        </ImageContextProvider>
      </CarouselContextProvider>
    </BusinessContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
