import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import SignIn from './pages/SignIn';
import CardDetails from './components/CardDetails';
import Announcements from './pages/Announcements';
import { useState } from 'react';
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <Router>
        <Navbar isSignedIn={isSignedIn} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about' component={About} />
          <Route
          path='/signin'
          render={() => <SignIn setIsSignedIn={setIsSignedIn} />}
        />
          <Route path='/card-details' component={CardDetails} />
          <Route
          path='/announcements'
          render={() => <Announcements isSignedIn={isSignedIn} />}
        />
        </Switch>
      </Router>
    </>
  );
}

export default App;
