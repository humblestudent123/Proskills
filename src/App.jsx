import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body/Body';
import Page2 from './components/Page2/second-page.jsx';
import TestPage from './components/Page3-test/TestPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
