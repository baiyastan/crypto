import Maskl8 from "../assets/Group12.png";
import undraw_con from "../assets/undraw_con.png";
import undraw_con_img from "../assets/global-img.png";
import imagebittrex from "../assets/imagebittrex.png";
import imagebitfinex from "../assets/imagebitfinex.png";
import imagepoloniex from "../assets/imagepoloniex.png";
import "../Styles/components/Global.scss";
function Global() {
  return (
    <div className="global">
      <img className="global-img" src={Maskl8} />
      <img className="undraw" src={undraw_con} />
      <img className="global-img-m" src={undraw_con_img} />
      <div className="global-left">
        <div className="welcome">
          <div className="line"></div>
          <div className="welcome-title">05. NETWORK</div>
        </div>
        <h1 className="digital-title">Growing Global Network</h1>
        <p className="digital-des">
          Lymcoin is rapidly gaining popularity among crypto community. Lots of
          real companies and exchanges have adopted our coin already. There is
          much more to come. Stay tuned.
        </p>
        <div className="global-numbers">
          <div className="number-item">
            50+
            <div className="item-title">Exchanges</div>
          </div>
          <div className="number-item">
            180+
            <div className="item-title">Companies</div>
          </div>
        </div>
        <div className="global-images">
          <img className="images-item" src={imagebittrex} />
          <img className="images-item" src={imagebitfinex} />
          <img className="images-item" src={imagepoloniex} />
        </div>
      </div>
    </div>
  );
}

export default Global;
