import Navbar from "./Navbar";
import Digital from "./Digital";
import "../Styles/components/Main.scss";
import Sheet from "./Sheet";
import Global from "./Global";
import Team from "./Team";
import Charts from "./Charts";
import Miner from "./Miner";
import Events from "./Events";
import Footer from "./Footer";
function Main() {
  return (
    <div className="container">
      <Navbar />
      <Digital />
      <Sheet />
      <Global />
      <Team />
      <Charts />
      <Miner />
      <Events />
      <Footer />
    </div>
  );
}

export default Main;
