import React from "react";
import "./Form.css";

 //Handle the user's input 
 handleUsersInput = (event) => {
  this.setState({
    usersInput: event.target.value
  })
}

//Handle the operation 
handleOperationChange = (event) => {
  this.setState({
    selectedOperation: event.target.value
  })
}

//Submit
userSubmission = (event) => {
  event.preventDefault();
    this.props.getResult(this.state.usersInput, this.state.selectedOperation)
}

class Form extends React.Component {
  render() {
    return (
      <form>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
