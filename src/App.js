import "../src/App.css";
import Bio from "./Pages/Bio/Bio";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header.jsx";
import Portafolio from "./Pages/Portafolio/Portafolio";

function App() {


  return (
    <div className="App">
      <Header />
      <Bio />
      <Portafolio />
      <Footer />
    </div>
  );
}

export default App;
