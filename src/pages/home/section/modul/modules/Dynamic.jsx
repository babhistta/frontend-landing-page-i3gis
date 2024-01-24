import { Chip, Grid, Stack, Typography, useTheme } from "@mui/material";
import CardGlass from "../../../../../components/cards/cardGlass";
import CardIcon from "../../../../../components/cards/cardIcon";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import DynamicIcon from "../../../../../assets/modules/DynamicIcon";

function DynamicModule() {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={7}>
          <CardGlass
            display="flex"
            flexDirection="column"
            gap={1}
            alignItems="start"
          >
            <CardIcon icon={DynamicIcon} />
            <Typography variant="h4">
              Advancing Dynamic Application Security Testing with Extra
              Protection
            </Typography>
            <Typography variant="subtitle2" mb={2}>
              DAST (Dynamic Application Security Tools) helps your developers
              and QA teams test their web applications and APIs for potential
              security threats, so you can identify vulnerabilities that could
              compromise the integrity of data or the privacy of users. This
              helps ensure that your application meets security standards
              securely and properly.
            </Typography>
          </CardGlass>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack gap={2} height="100%">
            <CardGlass
              display="flex"
              flexDirection="column"
              gap={1}
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4">
                Comprehensive API Support Platform
              </Typography>
              <Typography variant="subtitle2" mb={2} align="center">
                Our platform offers unparalleled support for a diverse range of
                API types, empowering developers to seamlessly integrate various
                functionalities into their applications.
              </Typography>
              <Stack direction="row" gap={1}>
                <Chip
                  label="SOAP API"
                  icon={
                    <CheckCircleTwoToneIcon fontSize="small" color="success" />
                  }
                  sx={{
                    backgroundColor: theme.colors.success.lighter,
                    color: theme.colors.success.main,
                    fontWeight: "bold",
                    px: 1,
                  }}
                />
                <Chip
                  label="GraphQL"
                  icon={
                    <CheckCircleTwoToneIcon fontSize="small" color="success" />
                  }
                  sx={{
                    backgroundColor: theme.colors.success.lighter,
                    color: theme.colors.success.main,
                    fontWeight: "bold",
                    px: 1,
                  }}
                />
                <Chip
                  label="REST/Open API"
                  icon={
                    <CheckCircleTwoToneIcon fontSize="small" color="success" />
                  }
                  sx={{
                    backgroundColor: theme.colors.success.lighter,
                    color: theme.colors.success.main,
                    fontWeight: "bold",
                    px: 1,
                  }}
                />
              </Stack>
            </CardGlass>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Stack gap={2} height="100%">
            <CardGlass
              display="flex"
              flexDirection="column"
              gap={2}
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <CardGlass glassType="blue" p={2}>
                <Typography variant="h5">Web Scan</Typography>
                <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                  Website and web app scanning for vulnerabilities and ensuring
                  the app’s security.
                </Typography>
              </CardGlass>
              <CardGlass glassType="blue" p={2}>
                <Typography variant="h5">API Scan</Typography>
                <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                  API scanning to discover vulnerabilities and ensure that the
                  information contained within the API is secure.
                </Typography>
              </CardGlass>
            </CardGlass>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardGlass
            display="flex"
            flexDirection="column"
            gap={1}
            alignItems="start"
          >
            <img
              src={`/static/images/content/dynamic.png`}
              alt="step12image"
              style={{
                height: "250px",
              }}
            />
          </CardGlass>
        </Grid>
      </Grid>
    </>
  );
}

export default DynamicModule;
