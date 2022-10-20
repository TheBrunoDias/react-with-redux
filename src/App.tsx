import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CategoriePage } from './Pages/Categorie';
import { Home } from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categoria/:nomeCategoria" element={<CategoriePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
