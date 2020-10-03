import React, {Component} from 'react';
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import './App.css';

const app = new Clarifai.App({
  
  
  apiKey: "YOUR API KEY",
});

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      imageUrl: '',
     
    }
  }

  onChangeLink = (event) => {
    
    this.setState({input: event.target.value } )
  }

  onClickDetect = (event)=> {
    
    this.setState({imageUrl: this.state.input } )
    
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // THE JPG
        "https://clarifai.com/cms-assets/20180320221617/face-004.jpg"  
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='logo'>
          <Logo />
          <Rank />
        </div>
        
        <ImageLinkForm loadLink={this.onChangeLink} clickDetect={this.onClickDetect}/>
        <FaceRecognition />
      </div>
    )
  }
  
}

export default App;
