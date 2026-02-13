import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import './App.css'
import { Infopage } from './pages/Infopage';
import { RLLayout } from './layouts/RLLayout';
import { RLPage } from './pages/RLPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RLLayout />}>
        <Route index element={<RLPage />} />
        <Route path="info" element={<Infopage />} />
      </Route>

      <Route path="/home" element={<MainLayout/>}>
         <Route index element={<HomePage />} />
        <Route path="users" element={<UserPage />} />
      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  )
}

export default App
