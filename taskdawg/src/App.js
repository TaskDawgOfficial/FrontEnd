// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HelperHomePage from "./Components/HelperHomePage/HelperHomePage"
import HelperSearchPage from './Components/HelperSearchPage/HelperSearchPage';
import HelperProfilePage from './Components/HelperProfilePage/HelperProfilePage';
import Thread from './Components/ThreadPage/ThreadPage';
import TaskStatusPage from './Components/TaskStatusPage/TaskStatusPage';
import TaskCompletedPage from './Components/TaskCompletedPage/TaskCompletedPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HelperHomePage />} />
          <Route path="/helperSearchPage" element={<HelperSearchPage />} />
          <Route path="/helperProfilePage" element={<HelperProfilePage />} />
          <Route path="/threads" element={<Thread />} />
          <Route path="/taskStatusPage" element={<TaskStatusPage />} />
          <Route path="/taskCompletedPage" element={<TaskCompletedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
