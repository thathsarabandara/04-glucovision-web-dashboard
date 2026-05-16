import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

// Layouts
import { PublicLayout } from './layouts/PublicLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { PatientLayout } from './layouts/PatientLayout';
import { HospitalLayout } from './layouts/HospitalLayout';

// Public Pages
import { HomePage } from './pages/public/HomePage';
import { FeaturesPage } from './pages/public/FeaturesPage';
import { BlogPage } from './pages/public/BlogPage';
import { BlogPostPage } from './pages/public/BlogPostPage';
import { RepositoriesPage } from './pages/public/RepositoriesPage';
import { GalleryPage } from './pages/public/GalleryPage';
import { ContactPage } from './pages/public/ContactPage';

// Auth Pages
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { OTPPage } from './pages/auth/OTPPage';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage';
import { ResetPasswordPage } from './pages/auth/ResetPasswordPage';

// Dashboard Pages (Using existing ones as placeholders for new route structure)
import { PatientDashboardPage } from './pages/dashboard/PatientDashboardPage';
import { HospitalDashboardPage } from './pages/dashboard/HospitalDashboardPage';
import { ProfilePage } from './pages/dashboard/ProfilePage';
import { DataCollectionPage } from './pages/dashboard/DataCollectionPage';

// Placeholder Component for unbuilt pages
const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center h-[50vh]">
    <h1 className="text-2xl font-display text-slate-500 font-bold">{title} - Coming Soon</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        {/* Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/repositories" element={<RepositoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>

        {/* Auth Pages */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="otp" element={<OTPPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        {/* Patient Dashboard */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<PatientDashboardPage />} />
          <Route path="meals" element={<PlaceholderPage title="Meal Tracker" />} />
          <Route path="history" element={<PlaceholderPage title="Glucose History" />} />
          <Route path="settings" element={<ProfilePage />} />
        </Route>

        {/* Hospital Dashboard */}
        <Route path="/hospital" element={<HospitalLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<HospitalDashboardPage />} />
          <Route path="roster" element={<PlaceholderPage title="Patient Roster" />} />
          <Route path="alerts" element={<PlaceholderPage title="Critical Alerts" />} />
          <Route path="analytics" element={<DataCollectionPage />} />
          <Route path="settings" element={<PlaceholderPage title="Facility Settings" />} />
        </Route>

        {/* Legacy redirect for old dashboard route */}
        <Route path="/dashboard" element={<Navigate to="/patient/overview" replace />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
