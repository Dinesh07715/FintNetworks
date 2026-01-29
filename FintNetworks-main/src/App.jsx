import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Blog from "./components/Blog";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";

import BlogDetail from "./pages/BlogDetail";

// Home page layout
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Blog />
      <About />
      <WhyChoose />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Blog Detail */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
