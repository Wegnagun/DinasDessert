import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MinLayout';
import './App.css';
import Home from './components/Home';
import News from './components/News';
import Deserts from './components/Deserts';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="deserts" element={<Deserts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
