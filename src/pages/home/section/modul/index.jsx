import {
  Box,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import CardGlass from "../../../../components/cards/cardGlass";
import { useState } from "react";
import ApplicationModule from "./modules/Application";
import ContainerModule from "./modules/Container";
import MobileModule from "./modules/Mobile";
import DynamicModule from "./modules/Dynamic";

function ModuleSection() {
  const theme = useTheme();
  const [value, setValue] = useState("appsec");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabCustom = styled(Tab)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: 500,
    "&.Mui-selected": {
      background: theme.colors.gradients.gradient1,
    },
  }));

  return (
    <Box
      sx={{
        height: "fit-content",
        pt: { xs: "140px", md: "400px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#091125",
        width: "100%",
        gap: 3,
        pb: 6,
      }}
    >
      <Stack>
        <Typography
          align="center"
          variant="h2"
          maxWidth="600px"
          sx={{
            background: theme.colors.gradients.gradient1,
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Modules
        </Typography>
        <Typography align="center" maxWidth="800px" variant="subtitle1">
          Sowning all modules on i3gis
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} mb={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <TabCustom label="Application Security" value="appsec" />
          <TabCustom label="Dynamic Security" value="dynsec" />
          <TabCustom label="Mobile Security" value="mobsec" />
          <TabCustom label="Container Security" value="consec" />
        </Tabs>
      </Stack>

      <Container maxWidth="lg">
        <Box height={"580px"}>
          {value === "appsec" ? (
            <ApplicationModule />
          ) : value === "dynsec" ? (
            <DynamicModule />
          ) : value === "mobsec" ? (
            <MobileModule />
          ) : value === "consec" ? (
            <ContainerModule />
          ) : null}
        </Box>

        <Grid container spacing={2} mt={4}>
          <Grid item xs={12}>
            <CardGlass>
              <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <img
                  src="/static/images/content/integration.png"
                  alt="step12image"
                  style={{
                    width: "500px",
                  }}
                />
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  width="500px"
                >
                  <Typography
                    variant="h3"
                    sx={{
                      background: theme.colors.gradients.gradient1,
                      "-webkit-background-clip": "text",
                      "-webkit-text-fill-color": "transparent",
                    }}
                  >
                    CI/CD Integration
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    Integrating i3gis with CI/CD tools can greatly enhance your
                    software development and deployment processes. By
                    incorporating security and operational considerations
                    throughout the development lifecycle.
                  </Typography>
                  <CardGlass
                    glassType="blue"
                    mt={3}
                    p={2}
                    display="flex"
                    gap={4}
                  >
                    <img
                      src="/static/images/logo/cicd/github.png"
                      alt="step12image"
                      style={{
                        height: "30px",
                        filter: " brightness(30%) saturate(0) invert(80%)",
                      }}
                    />
                    <img
                      src="/static/images/logo/cicd/gitlab.png"
                      alt="step12image"
                      style={{
                        height: "30px",
                      }}
                    />
                    <img
                      src="/static/images/logo/cicd/jenkins.png"
                      alt="step12image"
                      style={{
                        height: "30px",
                      }}
                    />
                    <img
                      src="/static/images/logo/cicd/tekton.png"
                      alt="step12image"
                      style={{
                        height: "30px",
                      }}
                    />
                    <img
                      src="/static/images/logo/cicd/bamboo.png"
                      alt="step12image"
                      style={{
                        height: "30px",
                        filter: " brightness(30%) saturate(0) invert(80%)",
                      }}
                    />
                  </CardGlass>
                </Stack>
              </Stack>
            </CardGlass>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ModuleSection;
