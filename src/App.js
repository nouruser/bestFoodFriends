import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Announcements from './pages/Announcements';
import About from './pages/About';
import SignIn from './pages/SignIn';
import CardDetails from './components/CardDetails';
import AddAnnoncement from './association/AddAnnoncement';
import AllAnnoncements from './association/AllAnnoncements';
import AssociationNav from './association/AssociationNav';
import AssociationHome from './association/AssociationHome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <Router>
        {isSignedIn ? (
          <>
            <AssociationNav />
            <Switch>
              {/* <Route path='/' exact component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
              <Route path='/signin' render={() => <SignIn setIsSignedIn={setIsSignedIn} />} />
              <Route path='/card-details' component={CardDetails} /> */}
              <Route path='/announcements' render={() => <Announcements isSignedIn={isSignedIn} />} />
              <Route path='/association-home' component={AssociationHome} />
              <Route path='/add-annoncements' component={AddAnnoncement} />
              <Route path='/all-annoncements' component={AllAnnoncements} />
            </Switch>
            <Footer/>
          </>
        ) : (
          <>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
              <Route path='/signin' render={() => <SignIn setIsSignedIn={setIsSignedIn} />} />
              <Route path='/card-details' component={CardDetails} />
              <Route path='/announcements' render={() => <Announcements isSignedIn={isSignedIn} />} />
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
