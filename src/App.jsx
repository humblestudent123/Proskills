import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body/Body';
import Page2 from './components/Page2/second-page';
import TestPage from './components/Page3-test/TestPage';
import IntroPage from './components/intro/IntroPage';
import ModelsPage from './components/models/ModelsPage';
import PromptsPage from './components/prompts/PromptsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/prompts" element={<PromptsPage />} />
      </Routes>
    </Router>
  );
}

export default App;