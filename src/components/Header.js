import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button onClick={props.onAdd} text={props.showAdd ? "Close" : "Add"} 
      color={props.showAdd? "red" : "green"} />
    </header>
  );
};

export default Header;
