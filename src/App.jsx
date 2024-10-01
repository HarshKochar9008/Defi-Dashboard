import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Dashboard from './components/dashboard';
import Header from './header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
