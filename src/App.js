import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BlogList from './BlogList';
import BlogPost from './BlogPost';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-container">
            <span className="footer-text">Terms of service</span>
            <span className="footer-text">Privacy notice</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
