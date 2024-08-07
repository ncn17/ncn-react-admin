import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * Build a custom App Wrapped
 * Init and config react router
 * @returns App
 */
export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

/**
 * Build a custom App Wrapped
 * Init and config react router
 * @returns WrappedApp
 */
export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
