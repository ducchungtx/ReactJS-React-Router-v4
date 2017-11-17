import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu />
                    {/* Noi dung */}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                    
                </div>
            </Router>
        );
    }
}

export default App;
