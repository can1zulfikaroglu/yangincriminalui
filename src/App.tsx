import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css'

function App() {
return (
    <Router>
      <Routes>
        {/* Ana sayfa rotası */}
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </Router>
  );
}

export default App
