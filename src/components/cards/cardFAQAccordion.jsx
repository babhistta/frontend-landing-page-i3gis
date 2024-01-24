import { ExpandCircleDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

function CardFAQAccordion({ data }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandCircleDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          py: 1,
          "& .MuiAccordionSummary-content": {
            my: 1,
          },
        }}
      >
        <Typography variant="h5" fontWeight={400}>
          {data?.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle2">{data?.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

CardFAQAccordion.propTypes = {
  data: PropTypes.object,
};

export default CardFAQAccordion;
