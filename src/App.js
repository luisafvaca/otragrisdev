import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './components/Landing/landing.jsx';
import InterviewQuestions from './components/InterviewQuestions/InterviewQuestions';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/interviewQuestions">
            <InterviewQuestions />
          </Route>
       </Switch>
      
    </Router>
  );
}

export default App;
