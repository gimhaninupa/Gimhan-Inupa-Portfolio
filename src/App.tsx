
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PhotographyPage } from './pages/PhotographyPage';
import { ProjectVideoPage } from './pages/ProjectVideoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 cursor-none">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/project/:id" element={<ProjectVideoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
