import Button from "./Button";

const Header = ({title, name}) => {
    
    const onclick = () => {
        console.log("Hey");
    }

    return (
        <header className="header">
        <h1>{title}</h1>
        <Button onClick={onclick} />
        </header>
    )
};


export default Header;
