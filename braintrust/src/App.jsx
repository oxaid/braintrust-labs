import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import PageWrapper from "./components/PageWrapper"
import PageLayout from "./components/PageLayout"
import Home from "./pages/Home"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Contact from "./pages/Contact"
import { Toaster } from "react-hot-toast";

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageLayout noPadding>
              <PageWrapper><Home /></PageWrapper>
            </PageLayout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageLayout noPadding>
              <PageWrapper><Privacy /></PageWrapper>
            </PageLayout>
          }
        />
        <Route
          path="/terms-of-services"
          element={
            <PageLayout noPadding>
              <PageWrapper><Terms /></PageWrapper>
            </PageLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PageLayout noPadding>
              <PageWrapper><Contact /></PageWrapper>
            </PageLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <AnimatedRoutes />
    </Router>
  )
}
