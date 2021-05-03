import React, { Component } from "react";
import GiftList from "../components/GifList";
import GiftSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifData: [],
    };
  }

  url =
    "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g";

  componentDidMount() {
    fetch(this.url)
      .then((resp) => resp.json())
      .then((gifData) => {
        this.setState({ gifData: gifData.data.slice(0, 3) });
      });
  }

  handleSubmit = (e, search) => {
    e.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((resp) => resp.json())
      .then((gifData) => {
        this.setState({
          gifData: gifData.data.slice(0, 3),
        });
      });
    e.target.reset();
  };

  render() {
    return (
      <div>
        <GiftSearch handleSubmit={this.handleSubmit} />
        <GiftList gifData={this.state.gifData} />
      </div>
    );
  }
}
