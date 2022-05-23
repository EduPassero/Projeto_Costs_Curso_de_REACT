import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Routes>
        <Route path="/" element=""/>
        <Route path="/contato" element=""/>
      </Routes>
    </Router>
  );
}

export default App;
