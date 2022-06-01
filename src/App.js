import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import * as CONST_ROUTES from "./routing_constants/routes"
import NavigationBar from './components/NavigationBar'
import Text from "./Text"
import SignUpForm from "./components/SignUpForm"

function App() {
  return (
    <Router>
      <NavigationBar />
          <Routes>
            <Route path={CONST_ROUTES.SIGN_UP} element={<SignUpForm />}>
            </Route>
            <Route path={CONST_ROUTES.HOME} element={<Text />}>
            </Route>
          </Routes>
    </Router>
  );
}

export default App;