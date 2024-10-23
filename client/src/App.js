import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import PageNotFound from './pages/PageNotFound.js';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './pages/auth/Register.js';
import Login from './pages/auth/Login.js';
import Dashboard from './user/Dashboard.js';
import PrivateRoute from './components/Layout/routes/Private.js';
import ForgotPassword from './pages/auth/ForgotPassword.js';
import AdminRoute from './components/Layout/routes/AdminRoute.js';
import AdminDashboard from './pages/Admin/AdminDashboard.js';
import CreateStream from './pages/Admin/CreateStream.js';
import CreatePost from './pages/Admin/CreatePost.js';
import Users from './pages/Admin/Users';
import Posts from './user/Posts.js';
import Profile from './user/Profile.js';
import Ai from './pages/Ai.js';
import MyPage from './pages/Bart.js';
import Internship from './pages/Internship.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommunityForum from './pages/CommunityForum.js';
import EducationalMaterials from './pages/EducationalMaterials.js';
import GuidanceArticles from './pages/GuidanceArticles.js';
import MotivationalResources from './pages/MotivationalResources.js';
import MeditationYoga from './pages/Meditation.js';
import WellnessTools  from './pages/WellnessTools.js';
const App = () => {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        
        {/* Authentication Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        
        {/* User Dashboard */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/posts" element={<Posts />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/dashboard/admin" element={<AdminRoute />}>
          <Route path="" element={<AdminDashboard />} />
          <Route path="create-stream" element={<CreateStream />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="users" element={<Users />} />
        </Route>
        
        {/* Static Pages */}
        <Route path='/about-us' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/bart' element={<MyPage />} />
        <Route path='/internships' element={<Internship />} />
        
        {/* Resource Pages */}
        <Route path="/ask-ai-for-help" element={<Ai />} />
        <Route path="/wellness-tools" element={<WellnessTools />} />
        <Route path="/community-forum" element={<CommunityForum />} />
        <Route path="/motivational-resources" element={<MotivationalResources />} />
        <Route path="/educational-materials" element={<EducationalMaterials />} />
        <Route path="/guidance-articles" element={<GuidanceArticles />} />
        <Route path="/meditation-yoga" element={<MeditationYoga />} />


        {/* Catch-All for 404 */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
