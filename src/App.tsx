import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useMode, ColorModeContext } from './theme';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

/**
 * Build a custom App Wrapped
 * Init and config react router
 * @returns App
 */
export function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

/**
 * Build a custom App Wrapped
 * Init and config react router
 * @returns WrappedApp
 */
export function WrappedApp() {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}
