import "../Styles/components/Sheet.scss";
import Maskl7 from "../assets/image 2.png";
import Maskl3 from "../assets/image 3.png";
import Maskl4 from "../assets/image 45.png";
import Maskl5 from "../assets/image 55.png";
import Maskl6 from "../assets/image 6.png";
import Maskl8 from "../assets/image 2.png";
// import Maskl7 from "../assets/image.png";
function Sheet() {
  return (
    <>
      <div className="sheets">
        <div></div>
        <div className="sheet-containers">
          <div className="line"></div>
          <div className="november text">November 2017</div>
          <div className="march text">March 2018</div>
          <div className="may text">May 2020</div>
          <div className="January text">January 2018</div>
          <div className="March text">March 2019</div>
          <div className="September text">September 2020</div>
          <div className="track black-text">
            Tracking services for different smart contract types
          </div>
          <div className="release black-text">
            Release of a decentralized app for affiliate networks
          </div>
          <div className="Development black-text">
            Development of different types of smart contracts (CPA, CPL, CPC,
            CPS, CPI)
          </div>
          <div className="release2 black-text">
            Release of a decentralized app for merchants / affiliates
          </div>
          <div className="Launch black-text">
            Launch of the world's first decentralized affiliate network based on
            the HOQU platform
          </div>

          <div className="one crug"></div>
          <div className="two crug"></div>
          <div className="three crug"></div>
          <div className="four crug"></div>
          <div className="five crug1"></div>
          <div className="sex crug1"></div>
        </div>
      </div>
      <div className="svg">
        <img className="svg-item" src={Maskl7} />
        <img className="svg-item" src={Maskl3} />
        <img className="svg-item" src={Maskl4} />
        <img className="svg-item" src={Maskl5} />
        <img className="svg-item" src={Maskl6} />
        <img className="svg-item" src={Maskl8} />
      </div>
    </>
  );
}

export default Sheet;
