import { Card } from "@mui/material";
import PropTypes from "prop-types";

function CardGlass({ children, glassType, ...props }) {
  return (
    <Card
      sx={{
        p: 2.5,
        borderRadius: "10px",
        border: "1px solid  #29334D",
        background:
          glassType === "black"
            ? "rgba(5, 8, 15, 0.70)"
            : glassType === "blue"
            ? "rgba(55, 70, 103, 0.40)"
            : "rgba(41, 45, 60, 0.50)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(24px)",
        ...props,
      }}
    >
      {children}
    </Card>
  );
}

CardGlass.propTypes = {
  children: PropTypes.node,
  glassType: PropTypes.oneOf(["black", "gray", "blue"]),
};

export default CardGlass;
