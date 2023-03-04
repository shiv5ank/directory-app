import { Link } from "react-router-dom";
const Button = () => {
  return (
    <div className="button-container">
      <button className="btn">
        <Link to={"/"}>Add New Person</Link>
      </button>
      <button className="btn">
        <Link to={"/refresh"}>Reset Information</Link>
      </button>
    </div>
  );
};

export default Button;
