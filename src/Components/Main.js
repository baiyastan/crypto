import Navbar from "./Navbar";
import Digital from "./Digital";
import "../Styles/components/Main.scss";
import Sheet from "./Sheet";
import Global from "./Global";
function Main() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <Digital />
      <Sheet />
      <Global />
    </div>
  );
}

export default Main;
