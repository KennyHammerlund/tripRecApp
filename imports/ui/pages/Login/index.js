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
    name: '',
  }
    
  render() {
    const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $password: String!, $name: String!) {
      signup(email: $email, password: $password, name: $name) {
        token
      }
    }
    `
    const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }`

    const { login, email, password, name } = this.state
    
    return (
      <div className="form-login">
        <Image
            src="./img/2x/Circle_Logo_1200.png"
            width={200}
            height={200}
            className="m-lr-auto"
          />

        <div className="flex flex-column m-b-20">
          <h4 className="mv3">{login ? 'Login To TripRec' : 'Sign Up For TripRec'}</h4>
          
            {!login && (
              <FormControl className="Block">
                <InputLabel htmlFor="username">Name</InputLabel>
                <Input
                id="username"
                value={name}
                type="text"
                fullWidth={true}
                onChange={e => this.setState({ name: e.target.value })}
                label="Username" />
              </FormControl>              
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
          variables={{ email, password, name }}
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
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }
  

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
};
  
export default Login;
