import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProjetc';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contato" element={<Contato/>}/>
            <Route path="company" element={<Company/>}/>
            <Route path="newproject" element={<NewProject/>}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
