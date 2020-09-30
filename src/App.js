import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      fileLink: '',
      NumberOfFaces : 0,
    }
  }

  onChangeLink(event) {
    console.log(event.target.value)
  }

  onClickDetect(event) {
    console.log('event')
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='logo'>
          <Logo />
          <Rank />
        </div>
        
        <ImageLinkForm loadLink={this.onChangeLink} clickDetect={this.onClickDetect}/>
        {/*<FaceRecognition />*/}
      </div>
    )
  }
  
}

export default App;
