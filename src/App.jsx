import './index.css';
import MainPage from './pages/MainPage';
import QRPage from './pages/QRPage';
import GroupPage from './pages/GroupPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/session/:sessionId" element={<QRPage />} />
        <Route path="/group/:groupId" element={<GroupPage />} />
      </Routes>
    </Router>
  );
}

export default App
