import React from 'react'
import img from "./image1.jpg"
import img2 from "./image2.jpg"
import './App.css';
import './style.css';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Recette de la Forêt Noire</h1>
      <br />
      <img src={img2} width={300} height={200}/>
      <br />
      <img src={img} />
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
);
}
export default App;
