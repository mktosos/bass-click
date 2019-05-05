import React from 'react';
import './App.css';
import images from "./images.json";
import Wrapper from "./components/Wrapper"
import ImageCard from "./components/ImageCard"
class App extends React.Component {

 
  state = {
    images: images,
    score: 0,
    guess: "Click on an image to start playing",
    topScore: 0,
    selected: []
  };




  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Clicky Game 
        </h1>
      
      
      <Wrapper>
        {this.state.images.map(image => (
          <ImageCard
            key={image.id}
            id={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
      </header>
      
    </div>
  );
}
}
console.log(images, "hi");
export default App;
