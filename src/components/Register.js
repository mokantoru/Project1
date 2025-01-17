import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import '../css/register.css'

class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="mt-5 pt-5 row">
                    <div className="col-5 col-md-6 mx-auto card cardRegister">
                        <div className="card-body">
                            <div className="border-bottom card-title">
                                <h1 className="text-center registerTitle">
                                    CREATE AN ACCOUNT
                                </h1>
                            </div>
                            <div className="card-title mt-4">
                                <p className="mb-0">USERNAME</p>
                                <form className="input-group">
                                    <input ref={input => {this.username = input}} className="form-control inputRegister" type="text"/>
                                </form>
                            </div>
                            <div className="card-title mt-4">
                                <p className="mb-0">EMAIL</p>
                                <form className="input-group">
                                    <input ref={input => {this.email = input}} className="form-control inputRegister" type="email"/>
                                </form>
                            </div>
                            <div className="card-title mt-4">
                                <p className="mb-0">PASSWORD</p>
                                <form className="input-group">
                                    <input ref={input => {this.password = input}} className="form-control inputRegister" type="password"/>
                                </form>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-dark mt-3 px-5 buttonRegister">CREATE</button>
                            </div>
                            <div className="mt-4 text-center text-uppercase">
                                <p>already have mokantoru account? <Link to="/login" className="registerText">LOGIN</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register