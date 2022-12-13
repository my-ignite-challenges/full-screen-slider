import { Carousel } from "./components/Carousel";

import "./styles/global.css";
const slides = [
  "http://github.com/georgewfsantos.png",
  "https://images.pexels.com/photos/11403826/pexels-photo-11403826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14435840/pexels-photo-14435840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12649521/pexels-photo-12649521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function App() {
  return <Carousel slides={slides} showIndicators />;
}

export default App;
