import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Image from '../../components/Image';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { AUTH_TOKEN } from '../../constants'

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
    
  render() {
    const SIGNUP_MUTATION = gql`
    mutation($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
      Signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) 
    }
    `
    const LOGIN_MUTATION = gql`
    mutation ($email: String!, $password: String!) {
      Login(email: $email, password: $password) 
    }`

    const { login, email, password, firstName, lastName } = this.state
    
    return (
      <div className="form-login">
        <Image
            src="./img/2x/Circle_Logo_1200.png"
            width={200}
            height={200}
            className="m-lr-auto"
          />

        <div className="flex flex-column m-b-20">
          <h4 className="text-center">{login ? 'Login To TripRec' : 'Sign Up For TripRec'}</h4>
           
            {!login && (
              <div>
                <FormControl className="Block">
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <Input
                  id="firstName"
                  value={firstName}
                  type="text"
                  fullWidth={true}
                  onChange={e => this.setState({ firstName: e.target.value })}
                  label="firstName" />
                </FormControl>
                <FormControl className="Block">
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <Input
                  id="lastName"
                  value={lastName}
                  type="text"
                  fullWidth={true}
                  onChange={e => this.setState({ lastName: e.target.value })}
                  label="lastName" />
                </FormControl>   
              </div>             
            )}

              <FormControl className="block">
                <InputLabel htmlFor="email">E-Mail</InputLabel>
                <Input
                id="email"
                value={email}
                type="text"
                fullWidth={true}
                onChange={e => this.setState({ email: e.target.value })}
                label="email" />
              </FormControl>   
              
              <FormControl className="block">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                fullWidth={true}
                id="password"
                value={password}
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
                label="Username" />
              </FormControl>   
        </div>

        <Mutation
          mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
          variables={{ email, password, firstName, lastName }}
          onCompleted={data => this._confirm(data)}
        >  
          {mutation => ( 
            <Button variant="contained" size="small" 
            onClick={mutation}
            color="primary">
              {login ? 'login' : 'create account'}
            </Button>
            )}
        </Mutation>

        <div
          className="pointer button m-t-15"
          onClick={() => this.setState({ login: !login })}
        >
          {login ? 'need to create an account?' : 'already have an account?'}
        </div>
      </div>
    );
  }
  
  _confirm = async data => {
    const Login  = this.state.login ? data.Login : data.Signup;
    this._saveUserData(Login);
    this.props.history.push(`/dashboard`);
  }
  

  _saveUserData = token => {
    console.log(`Token is ${token}`);
    localStorage.setItem(AUTH_TOKEN, token)
    console.log(`Get token ${localStorage.getItem(AUTH_TOKEN)}`);
  }
};
  
export default Login;
