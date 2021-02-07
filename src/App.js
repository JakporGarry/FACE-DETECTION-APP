import React, {Component } from 'react';
import Navigation from "./Components/Navigation/Navigation.jsx";
import Logo from "./Components/Logo/Logo.jsx";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.jsx";
import Rank from "./Components/Rank/Rank.jsx";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition.jsx";
import Particles from 'react-particles-js';
import Clarifai from "clarifai";
import './App.css';


const app = new Clarifai.App({
  apiKey: "654803e4a1854c4fb9f0c7282403217f"
});

const particlesOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "red",
        blur: 15
      }
    },
    number: {
      value: 256,
      density:{
        enable:true,
        value_area:395
      }
    }
  }
};

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:"",
      imageUrl:"",
      box:{},
    }
  }

calculateFaceLocation  = (data) => {

 const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
 const image = document.getElementById("inputImage");
 const width = Number(image.width);
 const height = Number(image.height);

 return {
  leftCol: clarifaiFace.left_col * width,
  topRow: clarifaiFace.top_row * height,
  rightCol:  width - (clarifaiFace.right_col * width),
  bottomRow: height - (clarifaiFace.bottom_row * height),
 }

}

displayFaceBox = (box) =>{
  console.log(box)
  this.setState({box: box});
}

onInputChange = (event) =>{
  this.setState({input: event.target.value})
}

onSubmit  = () =>{
this.setState({imageUrl: this.state.input});
 
app.models
.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
.catch(err => console.log('err'))

}

  render(){
    return (
     <div className = "App">
        <Particles className = "particles"
            params={{
            particlesOptions
            }}
          />
        <Navigation></Navigation>
        <Logo></Logo>
        <Rank></Rank> 
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit ={this.onSubmit}></ImageLinkForm>
        
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}></FaceRecognition>
      </div>
    )
  }
}

export default App;
