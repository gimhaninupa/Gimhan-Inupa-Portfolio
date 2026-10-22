
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProjectVideoPage } from './pages/ProjectVideoPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { WelcomeScreen } from './components/ui/WelcomeScreen';
import Galaxy from './components/ui/Galaxy';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Router>
      <ScrollToTop />
      <WelcomeScreen />
      <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-brand selection:text-white">
        {/* Full-Site Galaxy Particle Background */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <Galaxy
            starColors={
              isDark
                ? ['#38bdf8', '#818cf8', '#a855f7', '#bae6fd']
                : ['#002455', '#1d4ed8', '#38bdf8', '#64748b']
            }
            density={isDark ? 0.65 : 1}
            glowIntensity={isDark ? 0.18 : 0.25}
            flareIntensity={isDark ? 0.35 : 0.4}
            starSpeed={isDark ? 0.22 : 0.35}
            speed={isDark ? 0.6 : 0.8}
            twinkleIntensity={isDark ? 0.2 : 0.3}
            mouseInteraction={true}
            mouseRepulsion={true}
            repulsionStrength={isDark ? 1.8 : 2.5}
            clickWarp={true}
            transparent={true}
            lightMode={!isDark}
            opacity={isDark ? 0.48 : 0.45}
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Navigate to="/#photography" replace />} />
            <Route path="/project/:id" element={<ProjectVideoPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

