import { Feature } from "../../components";
import "./whatUltraBot.css";

const WhatUltraBot = () => {
  return (
    <div className="what_ultrabot section__margin" id="what_ultrabot">
      <div className="what_ultrabot_feature">
        <Feature
          title="What Is Ultra Bot"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="what_ultrabot_heading">
        <h1 className="gradient__text">
          The Possibilities Are Beyond Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="what_ultrabot_container">
        <Feature
          title="ChatBots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledge Base"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments "
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments "
        />
      </div>
    </div>
  );
};

export default WhatUltraBot;
