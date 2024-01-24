import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMainContext } from "../../../../contexts/MainContext";
import { PlayCircle } from "@mui/icons-material";

function LandingSection() {
  const theme = useTheme();

  const { handleOpenDialogLiveDemo } = useMainContext();
  return (
    <Box
      sx={{
        height: { xs: "90vh", md: "100vh" },
        pt: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 0,
        px: 4,
      }}
    >
      <span
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#125585",
          filter: "blur(100px)",
          width: "400px",
          height: "350px",
          opacity: "0.4",
          left: -100,
          top: -100,
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#E16376",
          filter: "blur(100px)",
          width: "500px",
          height: "300px",
          opacity: "0.4",
          left: 200,
          top: -200,
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#32A071",
          filter: "blur(100px)",
          width: "300px",
          height: "300px",
          opacity: "0.4",
          left: 600,
          top: -250,
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#32A071",
          filter: "blur(100px)",
          width: "700px",
          height: "400px",
          opacity: "0.4",
          left: -100,
          bottom: -300,
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#E16376",
          filter: "blur(100px)",
          width: "600px",
          height: "400px",
          opacity: "0.4",
          right: -100,
          bottom: -350,
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#125585",
          filter: "blur(100px)",
          width: "500px",
          height: "450px",
          opacity: "0.4",
          right: -200,
          zIndex: -1,
        }}
      />
      <Typography align="center" mb={2} mt={8} variant="h1" maxWidth="600px">
        Revolutionizing{" "}
        <span
          style={{
            background: theme.colors.gradients.gradient1,
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          DevSecOps
        </span>{" "}
        with Simplicity and Agility
      </Typography>
      <Typography align="center" maxWidth="900px" variant="subtitle1">
        i3GIS is an end-to-end platform from i3 that provides security testing
        tools and DevSecOps tool in a single dashboard. With its commercial
        modular capabilities and easy enhancement, i3GIS is an ideal choice for
        developing business application and managing DevSecOps to help company
        across a variety of industries in protecting their business straight
        from the development process.
      </Typography>
      <Stack direction="row" gap={2} my={4}>
        <Button
          size={
            useMediaQuery(theme.breakpoints.down("xs")) ? "medium" : "large"
          }
          onClick={() => handleOpenDialogLiveDemo()}
          sx={{
            position: "relative",
            color: "white",
            borderRadius: "50px",
            px: 3,

            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "50px",
              padding: "3px",
              background: theme.colors.gradients.gradient1,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            },
          }}
        >
          Request Live Demo
        </Button>
        <Button
          size={
            useMediaQuery(theme.breakpoints.down("xs")) ? "medium" : "large"
          }
          sx={{ color: "white", borderRadius: "50px" }}
          endIcon={<PlayCircle />}
        >
          Introduction Video
        </Button>
      </Stack>
      <img
        src="/static/images/content/landing-image.png"
        alt="step12image"
        style={{
          width: useMediaQuery(theme.breakpoints.down("sm")) ? "80vw" : "65vw",
          bottom: "-30vh",
        }}
      />
    </Box>
  );
}

export default LandingSection;
