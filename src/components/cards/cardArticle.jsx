import { Card, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CardArticle({ title, description, tag, imageUrl, date, height }) {
  return (
    <Card>
      <img
        src={imageUrl}
        alt="step12image"
        style={{
          width: height,
        }}
      />
      <Stack gap={0.5} p={2}>
        <Typography textTransform="uppercase" variant="subtitle2">
          {tag} - {date}
        </Typography>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Stack>
    </Card>
  );
}

CardArticle.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  date: PropTypes.string,
  height: PropTypes.string,
};

export default CardArticle;
