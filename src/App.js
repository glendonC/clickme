import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavigationBar from './components/NavigationBar'
import Text from "./Text"


function App() {
  return (
    <Router>
      <NavigationBar />
          <Routes>
            <Route path="/profile" element={<Text />}>
            </Route>
            <Route path="/" element={<Text />}>
            </Route>
          </Routes>
    </Router>
  );
}

export default App;