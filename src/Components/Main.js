import Navbar from "./Navbar";
import Digital from "./Digital";
import "../Styles/components/Main.scss";
import Sheet from "./Sheet";
function Main() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <Digital />
      <Sheet />
    </div>
  );
}

export default Main;
