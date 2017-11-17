import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = { 
        txtUsername: '',
        txtPassword: ''
    }

    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onLogin = (e) => {
        e.preventDefault();
        // console.log(this.state.txtUsername, this.state.txtPassword);
        const { txtUsername, txtPassword } = this.state;
        if(txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }))
        }
    }

    render() {
        const { txtUsername, txtPassword } = this.state;
        let loggedInUser = localStorage.getItem('user');
        if(loggedInUser !== null) {
            return <Redirect to="/products" />
        }
        return (            
            <div className="container">                
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
                    <form onSubmit={this.onLogin}>
                        <legend>Đăng nhập</legend>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="txtUsername"
                                value={txtUsername}
                                onChange={this.onChange}
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>                    
                </div>                
            </div>
            
        );
    }
}

export default Login;
