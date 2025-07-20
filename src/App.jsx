import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Filmes from './pages/Filmes.jsx';
import Quadrinhos from './pages/Quadrinhos.jsx';
import Desenhos from './pages/Desenhos.jsx';
import Bio from './pages/Bio.jsx';

export default function App() {
  return (
<HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="filmes"     element={<Filmes   />} />
      <Route path="quadrinhos" element={<Quadrinhos />} />
      <Route path="desenhos"   element={<Desenhos />} />
      <Route path="bio"        element={<Bio />} />
    </Route>
  </Routes>
</HashRouter>

  );
}