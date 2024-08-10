import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useMode, ColorModeContext } from './theme';
import NotFound from './pages/NotFound';
import Topbar from './pages/global/Topbar';
import Dashboard from './pages/dashboard';
import SidebarMenu from './pages/global/SidebarMenu';
import { Team } from './pages/team';
import { Contacts } from './pages/contacts';
import { Invoices } from './pages/invoices';
import { Profiles } from './pages/profiles';
import { Calendar } from './pages/calendar';
import { Faq } from './pages/faq';

/**
 * Build a custom App Wrapped
 * Init and config react router
 * @returns App
 */
export function App() {
  return (
    <div className="app">
      <SidebarMenu />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/profil-form" element={<Profiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

/**
 * Build a custom App Wrapped
 * Init and config react router | theme ...
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
