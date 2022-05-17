import "../Styles/components/Team.scss";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
function Team() {
  return (
    <div className="team">
      <div className="digital-right">
        <div className="welcome">
          <div className="line"></div>
          <div> 07. TEAM</div>
        </div>
        <h1 className="digital-title">Team & Advisors</h1>
        <p className="digital-des">
          With a team of top technology and finance professionals, the nonprofit
          Lymcoin expands access to low-cost financial services to fight poverty
          and maximize individual potential.
        </p>
      </div>
      <div className="top-dev">
        <div className="left">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-0.5"
              y="0.5"
              width="29.3738"
              height="29.3738"
              rx="14.6869"
              transform="matrix(-1 0 0 1 29.3738 0)"
              stroke="#4F4F4F"
            />
            <path
              d="M18.1376 22.1412C18.2356 22.2392 18.358 22.2882 18.4927 22.2882C18.6274 22.2882 18.7498 22.2392 18.8478 22.1412C19.0437 21.9453 19.0437 21.627 18.8478 21.4311L12.6035 15.1868L18.8478 8.94251C19.0437 8.74661 19.0437 8.42827 18.8478 8.23237C18.6519 8.03647 18.3335 8.03647 18.1376 8.23237L11.5383 14.8317C11.3424 15.0276 11.3424 15.346 11.5383 15.5419L18.1376 22.1412Z"
              fill="#4F4F4F"
            />
          </svg>
        </div>
        <div className="devoloper">
          <dev className="dev-item">
            <img className="dev-img" src={dev1} />
            <h4 className="dev-title">John Nelson</h4>
            <p className="dev-des">Account Manager</p>
          </dev>
          <dev className="dev-item">
            <img className="dev-img" src={dev2} />
            <h4 className="dev-title">John Nelson</h4>
            <p className="dev-des">Account Manager</p>
          </dev>
          <dev className="dev-item">
            <img className="dev-img" src={dev3} />
            <h4 className="dev-title">John Nelson</h4>
            <p className="dev-des">Account Manager</p>
          </dev>
        </div>
        <div className="right">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="29.3738"
              height="29.3738"
              rx="14.6869"
              stroke="#4F4F4F"
            />
            <path
              d="M12.2362 22.1412C12.1382 22.2392 12.0158 22.2882 11.8811 22.2882C11.7464 22.2882 11.624 22.2392 11.526 22.1412C11.3301 21.9453 11.3301 21.627 11.526 21.4311L17.7703 15.1868L11.526 8.94251C11.3301 8.74661 11.3301 8.42827 11.526 8.23237C11.7219 8.03647 12.0403 8.03647 12.2362 8.23237L18.8355 14.8317C19.0314 15.0276 19.0314 15.346 18.8355 15.5419L12.2362 22.1412Z"
              fill="#4F4F4F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Team;
