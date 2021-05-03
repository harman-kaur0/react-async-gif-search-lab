import React, { Component } from "react";

export default class GiftSearch extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state.input)}>
          <label>Enter a Search Term: </label>
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input type="Submit" value="Find Gifs" />
        </form>
      </div>
    );
  }
}
