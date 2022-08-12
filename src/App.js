import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Sliders from './components/Sliders';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <div className="App">
     <Navbars/>
     <Sliders/>
    </div>
  );
}

export default App;
