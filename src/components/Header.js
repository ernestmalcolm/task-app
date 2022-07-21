// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({title, name}) => {
    
    const onclick = () => {
        console.log("Hey");
    }

    return (
        <header className="header">
        <h1>{title}</h1>
        <h1>{name}</h1>
        <Button onClick={onclick} />
        </header>
    )
};


// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };


export default Header;
