// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AskerHomePage from "./Components/AskerHomePage/AskerHomePage"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AskerHomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
