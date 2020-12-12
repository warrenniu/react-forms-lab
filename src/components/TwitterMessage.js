import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    console.log(props)
    this.state = {
      name: ""
    };
  }

  changeHandler = (event) => {
    console.log("changing event", event.target.value)
    this.setState({name: event.target.value})
  }

  render() {
    let charNumber = this.props.maxChars - this.state.name.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.name} onChange={this.changeHandler} />
        <h5>{charNumber} characters left</h5>
      </div>
    );
  }
}

export default TwitterMessage;

// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.