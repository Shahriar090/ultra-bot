import { google, slack, shopify, atlassian, dropbox } from "./import";
import "./brand.css";
const Brand = () => {
  return (
    <div className="ultrabot_brand section__padding">
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
