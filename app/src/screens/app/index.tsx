import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainRoot } from '@/components/MainRoot';

import Home from '../home';
import Splash from '../splash';

const App = () => {
  return (
    <BrowserRouter>
      <MainRoot>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/splash' element={<Splash />} />
        </Routes>
      </MainRoot>
    </BrowserRouter>
  );
};

export default App;
