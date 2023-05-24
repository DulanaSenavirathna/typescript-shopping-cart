import React from 'react';
import{ Routes, Route } from "react-router-dom"
import { Container, CssBaseline } from '@mui/material';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
    <ShoppingCartProvider >

    <CssBaseline />
    <Navbar />
    <Container sx={{ mb: 4 }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
 
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
  );
}

export default App;
