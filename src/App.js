import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      < Routes >
        <Route exact path="/" element={<Index/>} />
        <Route element={<NotFound/>} />
      </Routes >
      </Layout>
    </BrowserRouter >
  );
}

export default App;
