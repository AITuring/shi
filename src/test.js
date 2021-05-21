import { Component } from "react";

const shi = require("jinrishici");

export default class Shici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ci: ""
    };
  }

  componentDidMount() {
    shi.load((result) => {
      this.setState({
        ci: result.data.content
      });
      console.log(result);
    });
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.ci}</h2>
      </div>
    );
  }
}
