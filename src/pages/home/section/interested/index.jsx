import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Card, Stack, Typography, useTheme } from "@mui/material";
import { useMainContext } from "../../../../contexts/MainContext";

function InterestedSection() {
  const theme = useTheme();
  const { handleOpenDialogLiveDemo } = useMainContext();
  return (
    <Box
      sx={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#091125",
        width: "100%",
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: "60vw",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
          src="/static/images/content/flying-phone.png"
          alt="step12image"
          style={{
            width: "250px",
            height: "auto",
            position: "absolute",
            right: 40,
            top: -70,
          }}
        />
        <Card
          sx={{
            background: "white",
            p: 4,
            width: "60vw",
          }}
        >
          <Stack mb={1} width="50%" gap={0.5}>
            <Typography variant="h3" color="black">
              Interested in seeing the i3gis in flight?
            </Typography>
            <Typography variant="subtitle1" color="grey" lineHeight={1.3}>
              Stay on top of your competition with a great performing app. Your
              time and energy are not wasted.
            </Typography>
          </Stack>
          <Button
            size="large"
            sx={{
              position: "relative",
              color: "white",
              borderRadius: "50px",
              px: 3,
              mt: 1,
              background: theme.colors.gradients.gradient1,
            }}
            endIcon={<ArrowForward />}
            onClick={() => handleOpenDialogLiveDemo()}
          >
            Request Live Demo
          </Button>
        </Card>
      </Box>
      <Stack gap={2} zIndex={1} width="100%" position="absolute">
        <span
          style={{
            backgroundColor: "#125585",
            width: "100%",
            height: "16px",
          }}
        />
        <span
          style={{
            backgroundColor: "#32A071",
            width: "100%",
            height: "16px",
          }}
        />
        <span
          style={{
            width: "100%",
            height: "16px",
            border: "1px solid #D57684",
            background: "#E16376",
            boxShadow: "0px 0px 4px 0px #EEA0AB",
          }}
        />
      </Stack>
    </Box>
  );
}

export default InterestedSection;
