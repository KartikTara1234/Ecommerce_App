import React from 'react';
import { ProductContextProvider } from './context/Productcontext';
import { AppNavigation } from './navigations';

export default function App() {
  return (
      <ProductContextProvider>
        <AppNavigation />
      </ProductContextProvider>
  );
}