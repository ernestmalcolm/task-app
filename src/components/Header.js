import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = (props) => {

  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" && <Button onClick={props.onAdd} text={props.showAdd ? "Close" : "Add"} 
      color={props.showAdd? "red" : "green"} />}
    </header>
  );
};

export default Header;
