import 'bootstrap/dist/css/bootstrap.min.css';
import myWonderfulImage from "./imageInSrc.jpg"
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
        <div className="title">
            <h1 className="red"> FC Barcelone </h1>
        </div>
        <br ></br>
        <div className="body">
         <div className="imageSrc">
          <img className="src"src={myWonderfulImage} alt="imageInSrc" /> 
          <h1 className="sousims"> FC Barcelona Team </h1>
         </div>
         <div className="imagePub">
            <img className="pub" src="imageInPublic.jpg" alt="imageInPublic" /> 
           <h1 className="sousimp"> FC Barcelona Stadium </h1>
         </div> 
    </div>
        <div className="video">
          <video style={{width:"320",height:"240"}} src="BEKO.mp4" type="video/mp4" controls>
          </video>
        </div>  
    </div>
  );
}

export default App;
