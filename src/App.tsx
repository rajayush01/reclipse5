import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Photography from "./pages/Photography";
import Films from "./pages/Films";
import FAQs from "./pages/FAQs";
import Enquire from "./pages/Enquire";
import Studio from "./pages/Studio";

export default function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/photography" element={<PageTransition><Photography /></PageTransition>} />
              <Route path="/films" element={<PageTransition><Films /></PageTransition>} />
              <Route path="/faqs" element={<PageTransition><FAQs /></PageTransition>} />
              <Route path="/enquire" element={<PageTransition><Enquire /></PageTransition>} />
              <Route path="/studio" element={<PageTransition><Studio /></PageTransition>} />
              <Route path="/contact" element={<Navigate to="/enquire" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
