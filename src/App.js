import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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
                            <NavLink
                                to="/"
                                className="my-link"
                                exact
                            >
                                Trang chủ
                            </NavLink>
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
                            <li className="active">
                                <NavLink
                                    to="/"
                                    className="my-link"
                                    exact
                                >
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className="active">
                                <NavLink
                                    to="/about"
                                    className="my-link"
                                >
                                    Giới thiệu
                                </NavLink>
                            </li>
                            <li className="active">
                                <NavLink
                                    to="/contact"
                                    className="my-link"
                                >Liên hệ</NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* Noi dung */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}

export default App;