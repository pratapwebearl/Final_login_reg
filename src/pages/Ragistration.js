import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import bootstrap from 'bootstrap';


class Ragistration extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        password: '',
        city: '',
        address: '',
        redirect: false,
        authError: false,
        isLoading: false,
    };

    handleNameChange = event => {
        this.setState({ name: event.target.value });
    }
    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    }
    handleNumberChange = event => {
        this.setState({ number: event.target.value });
    }
    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    }
    handleCityChange = event => {
        this.setState({ city: event.target.value });
    }
    handleAddressChange = event => {
        this.setState({ address: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });
        const url = 'https://gowtham-rest-api-crud.herokuapp.com/register';
        const name = this.state.name;
        const email = this.state.email;
        const number = this.state.number;
        const password = this.state.password;
        const city = this.state.city;
        const address = this.state.address;

        let bodyFormData = new FormData();
        bodyFormData.set('name', name);
        bodyFormData.set('email', email);
        bodyFormData.set('number', number);
        bodyFormData.set('password', password);
        bodyFormData.set('city', city);
        bodyFormData.set('address', address);
        axios.post(url, bodyFormData)
            .then(result => {
                this.setState({ isLoading: false });
                if (result.data.status !== 'fail') {
                    this.setState({ redirect: true, authError: true });
                } else {
                    this.setState({ redirect: false, authError: true });
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({ authError: true, isLoading: false });
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
    };


    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <h1 className="card-header">Registration Form</h1>
                    <div className="card-body">
                        <form className="reg-form" onSubmit={this.handleSubmit} >
                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputName">Name : </label>
                                    <input type="text" id="inputName" className="form-control" placeholder="Name" name="name" onChange={this.handleNameChange} required />
                                </div>
                            </div><br />

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputEmail">Email-Id : </label>
                                    <input type="text" id="inputEmail" className="form-control" placeholder="Email" name="email" onChange={this.handleEmailChange} required />
                                </div>
                            </div><br />

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="number">Number : </label>
                                    <input type="number" id="number" className="form-control" placeholder="number" name="number" onChange={this.handleNumberChange} required />
                                </div>
                            </div><br />

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputPassword">Password : </label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******" name="password" onChange={this.handlePasswordChange} required />
                                </div>
                            </div><br />

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="inputPassword">Choose a city : </label>
                                    <select className="form-control" id="city" name="city" onChange={this.handleCityChange} required>
                                        <option value="">Ahmedabad</option>
                                        <option value="">Bhavngar</option>
                                        <option value="">Surat</option>
                                        <option value="">Rajkot</option>
                                        <option value="">jamnagar</option>
                                        <option value="">Gandhinagar</option>
                                        <option value="">Baroda</option>
                                        <option value="">Botad</option>
                                    </select>
                                </div>
                            </div><br />

                            <div className="form-group">
                                <div className="form-label-group">
                                    <label htmlFor="address">Address : </label>
                                    <input type="text" id="address" className="form-control" placeholder="address" name="address" onChange={this.handleAddressChange} required />
                                </div>
                            </div><br />

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ragistration;