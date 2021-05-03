import React, { Component } from "react";

export default class GiftList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifData.map((data) => (
            <li key={data.id}>
              <img src={data.images.original.url} alt="gif" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
