import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="*" element={<h2>404</h2>} />
      </Route>
    </Routes>
  )
}

export default App
