import { Button } from "@mui/material";
import PropTypes from "prop-types";

function ButtonGradient({ type, text }) {
  return <Button variant={type}>{text}</Button>;
}

ButtonGradient.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default ButtonGradient;
