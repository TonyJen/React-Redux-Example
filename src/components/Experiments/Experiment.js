import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Experiment extends Component {


  state = {liked: true,
           list: this.createLongList()};

  createLongList() {
    const longNumber = 1000;
    const foo = [];
    let tempint = 0;
    for (tempint = 0; tempint <= longNumber; tempint++) {
      foo.push(Math.floor(Math.random() * 1000) + 1);
    }
    return foo;
  }

  render() {
    const t1 = performance.now();
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    const handleClick = ()=> {
      this.setState({
        liked: !this.state.liked
      });
    };
    let iint = 0;
    return (
      <div className="container">
      <Helmet title="Experient Page"/>
      <h1>Experiment Page</h1>
      {
        this.state.list.map((foo) => {
          return <div>Hello, {this.state.list[iint++]}!</div>;
        })
      }
      <p onClick={handleClick}>
        You {text} this. Click to toggle.
      </p>
      <p>
        This render took about {
             performance.now() - t1
          } milliseconds.
      </p>
      </div>
    );
  }
}
