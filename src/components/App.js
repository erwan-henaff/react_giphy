import React from 'react';
import '../css/App.css';
import data from '../data/giphy.js';
import ImageBox from './ImageBox';
import Preview from './Preview';


console.log(data.length);


// import ListContainer from './ListContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index : "https://media0.giphy.com/media/JVdF14CQQH7gs/giphy.gif?cid=31fb48e9edc198912f9c3ed7b12a11af8c5af80482718182&rid=giphy.gif"
    };
  }

  handleUpdate = index1 => {
    console.log("handelupdate entering")
    console.log(index1);
    this.setState({index:index1})
    
    console.log(index1);
    console.log("handelupdate exiting");
  };


  render() {
    const imgbox = data.map((el,data,index)=> {
      return (
        <ImageBox key={el.id} url_img={el.images.downsized_large.url} id={el.images.downsized_large.url} updateIndex={this.handleUpdate}></ImageBox>
      )
    })
    return (
      <div className="App">
          <div className="leftContainer">
            {imgbox}
          </div>
          <div className="rightContainer">
            <Preview previewIndex={this.state.index}></Preview>
          </div>
      </div>
    );
  }
}

export default App;
