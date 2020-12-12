import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = (event) => {
    console.log("changing event", event.target.value)
    if (event.target.name === "username") {
      this.setState({username: event.target.value})
    }
    else if (event.target.name === "password") {
      this.setState({password: event.target.value})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
    // this.props.handleLogin({
    //   username: event.target[0].value, 
    //   password: event.target[1].value
    // } 
      // this.setState({username: "", password: ""})
    // )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.name} onChange ={this.changeHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.name} onChange={this.changeHandler} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state on every change.