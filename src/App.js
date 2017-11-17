import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* Menu */}
                    <Menu />
                    {/* Noi dung */}
                    <Switch>
                        {this.showContentMenus(routes)}
                    </Switch>

                </div>
            </Router>
        );
    }

    showContentMenus(routes) {
        let kq = null;
        if (routes.length > 0) {
            kq = routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} component={route.main} />
            ))
        }
        return kq;
    }
}

export default App;
