import React, { lazy, Suspense } from "react";
import Loader from "./loader/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Apprenticeship = lazy(() => import("./pages/Apprenticeship"));
  const BusinessStartup = lazy(() => import("./pages/BusinessStartup"));
  const EducationSupport = lazy(() => import("./pages/EducationSupport"));
  const SkillsTraining = lazy(() => import("./pages/SkillsTraining"));
  return (
    <Suspense fallback={<Loader />}>
      <Router basename={import.meta.env.DEV ? "/" : "/rising-star-foundation/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apprenticeship" element={<Apprenticeship />} />
          <Route path="/business-startup" element={<BusinessStartup />} />
          <Route path="/education-support" element={<EducationSupport />} />
          <Route path="/skills-training" element={<SkillsTraining />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
