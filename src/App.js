import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Weapons from './pages/Weapons';
import Skins from './pages/Skins';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Header />}>
          <Route path='' element={<Home />} />
          <Route path='agents' element={<Agents />} />
          <Route path='weapons' element={<Weapons />} />
          <Route path='weapons/:uuId' element={<Skins />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
