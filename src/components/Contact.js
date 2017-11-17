import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {
    state = { 
        isChecked: false
    }
    onClick(check) {
        this.setState({
            isChecked: check
        })
    }
    render() {
        return (
            <div>
                CONTACT<br/>
                
                <button onClick={() => this.onClick(false)} type="button" className="btn btn-info">Cho phép</button><br/><br/>
                <button onClick={() => this.onClick(true)} type="button" className="btn btn-danger">Không Cho phép</button><br/>
                <Prompt
                    when={this.state.isChecked}
                    message={ location => (`Bạn muốn chắc muốn đến trang ${location.pathname}`) }
                />
            </div>
        );
    }
}

export default Contact;