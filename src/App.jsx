import Slider from "./component/Slider";

function App() {
  const slideArr = [
    {
      imgLink: "https://www.w3schools.com/howto/img_nature_wide.jpg",
      imgCaption: "Caption One",
    },
    {
      imgLink: "https://www.w3schools.com/howto/img_snow_wide.jpg",
      imgCaption: "Caption Two",
    },
    {
      imgLink: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      imgCaption: "Caption Three",
    },
    {
      imgLink: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
      imgCaption: "Caption Four",
    },
  ];

  return <div className="App">
    <h1>carosel slider with autoplay</h1>
    <Slider sliderArr={slideArr}/>
  </div>;
}

export default App;
