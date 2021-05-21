import { Component } from "react";

const shi = require("jinrishici");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ci: "",
      author: "",
      title: "",
      dynasty: ""
    };
  }
  // origin: Object
  // title: "霜叶飞·重九"
  // dynasty: "宋代"
  // author: "吴文英"
  componentDidMount() {
    shi.load((result) => {
      this.setState({
        ci: result.data.content,
        author: result.data.origin.author,
        title: result.data.origin.title,
        dynasty: result.data.origin.dynasty
      });
      console.log(result);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ci">{this.state.ci}</div>
        <div className="time">
          <div>{this.state.dynasty}</div>
          <div>{this.state.author}</div>
        </div>
        <div className="title">{this.state.title}</div>
      </div>
    );
  }
}
