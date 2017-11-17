import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './App.css';

const MenuLink = ({ label, to, activeOnlyWhenExtract }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExtract}
            children={
                ({ match }) => {
                    const active = match ? 'active abc' : '';
                    return (
                        <li className={active}>
                            <Link to={to} className="my-link">{label}</Link>
                        </li>
                    )
                }
            }
        />
    )
}

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <MenuLink label="Trang chủ" to="/" activeOnlyWhenExtract={true} />
                            <MenuLink label="Giới thiệu" to="/about" />
                            <MenuLink label="Liên hệ" to="/contact" />
                        </ul>
                    </nav>
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
