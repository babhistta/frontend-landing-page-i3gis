import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import dummyFAQ from "../../../../data/dummyFAQ";
import CardFAQAccordion from "../../../../components/cards/cardFAQAccordion";

function FAQSection() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "fit-content",
        py: 6,
        backgroundColor: "#191F31",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            position: "relative",
            mb: 2,
            "::before": {
              content: '""',
              position: "absolute",
              top: "100%",
              width: "100%",
              height: "4px",
              borderRadius: "2px",
              background: theme.colors.gradients.gradient1,
              mt: 0.5,
            },
          }}
        >
          Frequently Ask Qustions
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack gap={2}>
              {dummyFAQ?.slice(0, 3).map((data, i) => (
                <Box key={i}>
                  <CardFAQAccordion data={data} />
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack gap={2}>
              {dummyFAQ?.slice(3, 6).map((data, i) => (
                <Box key={i}>
                  <CardFAQAccordion data={data} />
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Button
          size="large"
          sx={{ color: "#337BAF" }}
          endIcon={<ArrowForward fontSize="small" />}
          onClick={() => {
            navigate(`/faqs`);
          }}
        >
          View All Question
        </Button>
      </Stack>
    </Box>
  );
}

export default FAQSection;
