import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import AuthFlow from './pages/AuthFlow';
import Dashboard from './pages/Dashboard';
import RulesPage from './components/landing/RulesPage';
import TriModePage from './pages/TriModePage';
import LevelsModePage from './pages/LevelsModePage';
import PhasesModePage from './pages/PhasesModePage';
import Phase1LevelsPage from './pages/Phase1LevelsPage';
import SpecialsModePage from './pages/SpecialsModePage';
import ProfilePage from './pages/ProfilePage';
import StorePage from './pages/StorePage';
import ResetPassword from './components/auth/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import { allCourseRoutes } from './routes/courseRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-purple-500 border-r-transparent mb-4"></div>
            <p className="text-gray-600 font-techno">Loading...</p>
          </div>
        </div>
      }>
        <Routes>
          {/* Auth Flow */}
          <Route path="/" element={<AuthFlow />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          
          {/* Main Pages */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/rules" element={<ProtectedRoute><RulesPage /></ProtectedRoute>} />
          <Route path="/tri-mode" element={<ProtectedRoute><TriModePage /></ProtectedRoute>} />
          <Route path="/levels-mode" element={<ProtectedRoute><LevelsModePage /></ProtectedRoute>} />
          <Route path="/phases/:courseId" element={<ProtectedRoute><PhasesModePage /></ProtectedRoute>} />
          <Route path="/levels/:courseId/phase1" element={<ProtectedRoute><Phase1LevelsPage /></ProtectedRoute>} />
          <Route path="/specials-mode" element={<ProtectedRoute><SpecialsModePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/store" element={<ProtectedRoute><StorePage /></ProtectedRoute>} />
          
          {/* Dynamic Course Routes - All 5 courses × 10 phases × ~65 levels = 315 levels */}
          {allCourseRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<ProtectedRoute>{route.element}</ProtectedRoute>} />
          ))}
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
