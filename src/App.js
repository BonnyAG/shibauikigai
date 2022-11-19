import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import NoPage from "./pages/NoPage";
import DailyPractices from "./blog/DailyPractices";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="our-mission" element={<Mission />} />
          <Route path="services" element={<Services />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/blog" element={<Layout />}>
          <Route path="daily-practices" element={<DailyPractices/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}