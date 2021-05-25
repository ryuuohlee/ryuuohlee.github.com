import React from 'react';
import Navbar from './Navbar.jsx';
import Home from '../components/Home/Home.jsx';
import About from '../components/About/About.jsx';
import Portfolio from './Portfolio.jsx';
import Experience from '../containers/Experience.jsx';
import Education from './Education.jsx';
import CV from '../components/CV/CV.jsx';
import css from './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return(
      //creates the routes for which page to render
      <Router>
        <div className='home-parent'>
          <div className="site-nav">
            <Navbar />
          </div>
          <main className="site-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/experience" component={Experience} />
              <Route path="/education" component={Education} />
              <Route path="/cv" component={CV} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;