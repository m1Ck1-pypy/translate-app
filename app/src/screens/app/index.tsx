import { ThemeOptions, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../home';
import Splash from '../splash';

const App = () => {
  return (
    <ThemeProvider theme={{} as ThemeOptions}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/splash' element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
