import "./feature.css";
const Feature = ({ title, text }) => {
  return (
    <div className="features_container_feature">
      <div className="features_container_feature_title">
        <h1>{title}</h1>
      </div>
      <div className="features_container_feature_text">{text}</div>
    </div>
  );
};

export default Feature;
