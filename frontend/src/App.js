import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MinLayout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default App;
