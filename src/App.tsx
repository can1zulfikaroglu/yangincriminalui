import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import './App.css'

function App() {
return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iletisim" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App
