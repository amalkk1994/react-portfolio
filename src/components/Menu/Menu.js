import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import { bool } from "prop-types";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Home
      </Link>
      <Link to="/about" onClick={() => setOpen(!open)}>
        About
      </Link>
      <Link to="/experience" onClick={() => setOpen(!open)}>
        Experience
      </Link>
      <Link to="/skills" onClick={() => setOpen(!open)}>
        Skills
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
