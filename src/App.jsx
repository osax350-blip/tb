import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

/**
 * App – root router + layout shell.
 *
 * To add a new page:
 *   1. Create src/pages/YourPage.jsx
 *   2. Add:  <Route path="/your-path" element={<YourPage />} />
 */
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen font-arabic bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here – e.g.:
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/admission" element={<AdmissionPage />} />
            */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
