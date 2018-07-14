import React, { Component } from "react";
// import { Link, withRouter } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: search.error ? [{ message: search.error }] : [],
      loading: false,
      username: "",
      password: "",
      remember: false,
      modal: true
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.toggleRemember = this.toggleRemember.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  //this is called before the render() function
  //Do not use this.setState({}) in cwm
  componentWillMount() {
    const { history } = this.props;
    //Redirect to dashboard if logged in
    if (null) {
      history.replace("/"); //changes route in react-router
    }
  }

  //this is called after Render
  componentDidMount() {
    //put some stuff here to do after the component is renedered
  }

  //this is called when the submit button is clicked for now we
  //have it set to display a console statement
  //async -> await runs function in order
  async onSubmit(e) {
    e.preventDefault();
    const { username } = this.state;
    console.log(
      `I clicked the submit button the current username is ${username}`
    );
    // if (fpPluginAvailable) {
    //   this.setState({ modal: true });
    // } else {
    //   this.login(false);
    // }
  }
  onChange(e) {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  //changes state of remember when the button is clicked
  toggleRemember(e) {
    e.preventDefault();
    e.stopPropagation();
    const { remember } = this.state;
    this.setState({ remember: !remember });
  }

  //triggers a modal window
  toggleModal(e) {
    e.preventDefault();
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }

  //builds the html -> This is NOT actually HTML its JSX
  render() {
    return (
      <div>
        <h2>TEST</h2>
      </div>
    );
    return (
      <form
        className="effect1 fadeInUp"
        method="post"
        name="loginForm"
        style={{ padding: 20 }}
        onSubmit={this.onSubmit}
        key="form"
      >
        <div className="form-group">
          <label
            htmlFor="email"
            className="control-label visible-ie8 visible-ie9"
          >
            Email
          </label>
          <input
            className="form-control"
            type="email"
            autoComplete="off"
            placeholder="Email Address"
            id="email"
            name="username"
            value={username}
            onChange={this.onChange}
            ref={input => {
              this.email = input;
            }}
            required
          />
          <p className="error">{}</p>
        </div>
        <div className="form-group">
          <label
            htmlFor="password"
            className="control-label visible-ie8 visible-ie9"
          >
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />
          <p className="error" />
        </div>
        <label className="control-label m-b-20" onClick={this.toggleRemember}>
          <span
            className={`glyphicons glyphicons-${
              remember ? "check text-primary" : "unchecked"
            }`}
          />{" "}
          Keep me logged in
        </label>
        <div className="form-group">
          <div className="row">
            <div className={"col-sm-12"}>
              <button
                type="submit"
                className="btn raised btn-md btn-primary w-md waves-effect waves-light btn-block"
              >
                {this.state.loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="text-center forget-password-block">
            {/* <Link to="/login/forgot-password">Can't access your account?</Link> */}
          </div>
        </div>
      </form>
    );
  }
}

export default login;
