import "./header.css";
import peopleImg from "../../assets/people.png";
import aiImg from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header_section section__padding" id="home">
      <div className="header_content">
        <h1 className="gradient__text">
          Let&apos;s Build Something Amazing With Ultra Bot
        </h1>
        <p>
          Ultra Bot: Your AI Conversation Partner. Elevate your interactions
          with our conversational AI. Engage, explore, and experience the future
          of communication.
        </p>
        <div className="header_content_input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Start</button>
        </div>
        <div className="header_content_people">
          <img src={peopleImg} alt="People Image" />
          <p>1500+ People Requested Access to Visit in the Last 24 Hours</p>
        </div>
      </div>
      <div className="header_image">
        <img src={aiImg} alt="AI Image" />
      </div>
    </div>
  );
};

export default Header;
