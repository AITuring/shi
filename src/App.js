import { Component } from "react";
import "./App.css";

const shi = require("jinrishici");


const colors = ['#ffb3a7',
'#ed5736',
'#f00056',
'#f47983',
'#db5a6b',
'#f20c00',
'#c93756',
'#f05654',
'#8c4356',
'#c83c23',
'#9d2933',
'#ff4c00',
'#ff4e20',
'#f35336',
'#cb3a56',
'#ff2d51',
'#ef7a82',
'#ff0097',
'#ff3300',
'#c3272b',
'#a98175',
'#c32136',
'#b36d61',
'#be002f',
'#dc3023',
'#f9906f',
'#fff143',
'#faff72',
'#eaff56',
'#ffa631',
'#ff8c31',
'#ff8936',
'#ffa400',
'#ff7500',
'#ffc773',
'#f0c239',
'#fa8c35',
'#b35c44',
'#a88462',
'#c89b40',
'#60281e',
'#b25d25',
'#827100',
'#7c4b00',
'#9b4400',
'#ae7000',
'#9c5333',
'#955539',
'#ca6924',
'#6e511e',
'#d3b17d',
'#e29c45',
'#896c39',
'#d9b611',
'#bddd22',
'#c9dd22',
'#afdd22',
'#789262',
'#a3d900',
'#9ed900',
'#0aa344',
'#00bc12',
'#0c8918',
'#1bd1a5',
'#2add9c',
'#48c0a3',
'#3de1ad',
'#40de5a',
'#00e09e',
'#00e079',
'#c0ebd7',
'#e0eee8',
'#bbcdc5',
'#424c50',
'#00e500',
'#9ed048',
'#96ce54',
'#7bcfa6',
'#2edfa3',
'#7fecad',
'#a4e2c6',
'#21a675',
'#057748',
'#bce672',
'#177cb0',
'#065279',
'#3eede7',
'#70f3ff',
'#4b5cc4',
'#a1afc9',
'#2e4e7e',
'#3b2e7e',
'#4a4266',
'#4a4266',
'#4a4266',
'#426666',
'#425066',
'#574266',
'#8d4bbb',
'#815463',
'#815476',
'#4c221b',
'#003371',
'#56004f',
'#801dae',
'#4c8dae',
'#b0a4e3',
'#cca4e3',
'#edd1d8',
'#e4c6d0',
'#75878a',
'#519a73',
'#a29b7c',
'#7397ab',
'#395260',
'#d1d9e0',
'#88ada6',
'#f3d3e7',
'#d4f2e7',
'#d2f0f4',
'#d3e0f3',
'#30dff3',
'#25f8cb',
'#ffffff',
'#fffbf0',
'#f2fdff',
'#d6ecf0',
'#f2ecde',
'#e0f0e9',
'#f3f9f1',
'#e9f1f6',
'#c2ccd0',
'#fcefe8',
'#e3f9fd',
'#808080',
'#eedeb0',
'#f0f0f4',
'#622a1d',
'#3d3b4f',
'#725e82',
'#392f41',
'#161823',
'#50616d',
'#758a99',
'#000000',
'#493131',
'#312520',
'#5d513c',
'#75664d',
'#6b6882',
'#665757',
'#41555d',
'#f2be45',
'#eacd76',
'#e9e7ef',
'#549688',
'#a78e44',
'#bacac6']

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
    const index = Math.floor((Math.random()*colors.length))
    const currentColor = colors[index]
    return (
      <div
        className="shi-body"
        style={{
          backgroundColor: currentColor,
        }}
        >
        <div className="ci">{this.state.ci}</div>
        <div className="ci-title">
          <div className="title"><a href={`https://www.google.com.hk/search?q=${this.state.author} ${this.state.title}`} target="_blank">[{this.state.title}]</a></div>
          <div className="time">
            <div className="dynasty"><a href={`https://www.google.com.hk/search?q=${this.state.dynasty}`} target="_blank">{this.state.dynasty}</a></div>
            <div className="author">·<a href={`https://www.google.com.hk/search?q=${this.state.author}`} target="_blank">{this.state.author}</a></div>
          </div>
        </div>
      </div>
    );
  }
}
