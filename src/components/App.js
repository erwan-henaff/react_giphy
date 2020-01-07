import React from 'react';
import '../css/App.css';
import data from '../data/giphy.js';
import ImageBox from './ImageBox';
import Preview from './Preview';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      preview_url : "https://media0.giphy.com/media/JVdF14CQQH7gs/giphy.gif?cid=31fb48e9edc198912f9c3ed7b12a11af8c5af80482718182&rid=giphy.gif"
    };
  }

  handleUpdate = pass_url => {
    this.setState({preview_url: pass_url})
  };


  render() {
    const imgbox = data.map((el)=> {
      return (
        <ImageBox key={el.id} url_img={el.images.downsized_large.url} updateIndex={this.handleUpdate}></ImageBox>
      )
    })
    return (
      <div className="App">
          <div className="leftContainer">
            {imgbox}
          </div>
          <div className="rightContainer">
            <Preview previewIndex={this.state.preview_url}></Preview>
          </div>
      </div>
    );
  }
}

export default App;
