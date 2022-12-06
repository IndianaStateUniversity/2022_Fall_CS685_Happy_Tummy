import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Home from './Components/Home';
import Support from './Components/Support';
import Recipe from './Components/Recipe';
import Feed from './Components/Feed';
import Aboutus from './Components/Aboutus';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container py-5">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/recipe' component={Recipe} />
              <Route exact path='/feed' component={Feed} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/aboutus' component={Aboutus} />
              <Route exact path='/signIn' component={SignIn} />
              <Route exact path='/signUp' component={SignUp} />
            </Switch>
           
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
