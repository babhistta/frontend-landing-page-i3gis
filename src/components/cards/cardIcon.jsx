import Card from "@mui/material/Card";
import PropTypes from "prop-types";

const CardIcon = ({ icon: Icon }) => {
  return (
    <Card
      sx={{
        height: "60px",
        minWidth: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#202C49", // Default background color
      }}
    >
      <Icon sx={{ color: "#337BAF" }} />{" "}
      {/* Use the capitalized Icon component */}
    </Card>
  );
};

CardIcon.propTypes = {
  icon: PropTypes.elementType,
};

export default CardIcon;
