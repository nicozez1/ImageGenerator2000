import { InputBox } from "./InputBox";
import { Configuration, OpenAIApi } from "openai";
import { useState} from "react";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});


const logo = require("./monkey.png");
const logo2 = require("./monkey2.png");
const logo3 = require("./monkey3.png");
const logo4 = require("./monkey4.png");
const logo5 = require("./monkey5.png");
const logo6 = require("./reset.png")

function App() {
  const [userPrompt, setUserPromnt] = useState("");
  let number = 1;
  let size = "256x256";
  const [imageUrl, setimageUrl] = useState("");
  const [imageStyle, setimageStyle] = useState("");
  const [imageStyleText, setimageStyleText] = useState("");
  


  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt + "," + imageStyle,
      n: parseInt(number),
      size: size,
    };
    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setimageUrl(urlData);
  };

  
  const pencilDrawing = () => {
    setimageStyle(" pencil drawing");
    setimageStyleText("Pencil drawing");
  };
  const watercolor = () => {
    setimageStyle(" watercolor painting");
    setimageStyleText("Watercolor painting");
  };
  const NHL = () => {
    setimageStyle(" NHL team emblem design");
    setimageStyleText("NHL team emblem design");
  };
  const photograph = () => {
    setimageStyle(" photograph");
    setimageStyleText("Photograph");
  };
  const popArt = () => {
    setimageStyle(" pop art");
    setimageStyleText("Pop art");
  };
  const noStyle = () => {
    setimageStyle("");
    setimageStyleText("");
  };

  return (
    <main className="App">
      <p className="header">Image generator 2000</p>


      {imageUrl && <img src={imageUrl} className="image" alt="ai image" />}
      <InputBox label={"Description"} setAttribute={setUserPromnt} />
      <div className="image-input-pair">
          <p className="chooseStyle">Choose a style</p>
      </div>
      <div className="image-input-pair">
        <button className="button">
          <img src={logo3} className="image" alt="Pencil drawing style" onClick={pencilDrawing}/>
        </button>
        <button className="button">
          <img src={logo} className="image" alt="Watercolor style" onClick={watercolor}/>
        </button>
        <button className="button">
          <img src={logo2} className="image" alt="Photograph style" onClick={photograph}/>
        </button>
        <button className="button">
          <img src={logo4} className="image" alt="Pop Art style" onClick={popArt} />
        </button>
        <button className="button">
          <img src={logo5} className="image" alt="NHL team emblem design style" onClick={NHL} />
        </button>
        <button className="buttonReset" >
          <img src={logo6} className="imageReset" alt="Image style reset" onClick={noStyle} />
        </button>
      </div>
      <p>{imageStyleText}</p>
      <button className="main-button" onClick={generateImage}>
        Generate
      </button>
    </main>
  );
}

export default App;
