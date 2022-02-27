import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ClassicMode from "./ClassicMode";
import CrazyMode from "./CrazyMode";
import Home from "./Home";
import { Container } from "./components/styles/Container.styled";

export function AppRoutes() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/crazy" element={<CrazyMode />} />
          <Route path="/classic" element={<ClassicMode />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
