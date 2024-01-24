import { Grid, Stack, Typography } from "@mui/material";
import CardGlass from "../../../../../components/cards/cardGlass";
import CardIcon from "../../../../../components/cards/cardIcon";
import ApplicationIcon from "../../../../../assets/modules/ApplicationIcon";

function ApplicationModule() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <CardGlass
          display="flex"
          flexDirection="column"
          gap={1}
          alignItems="start"
        >
          <CardIcon icon={ApplicationIcon} />
          <Typography variant="h4">
            Invincible Application Security to Shield Your Source Code
          </Typography>
          <Typography variant="subtitle2" mb={2}>
            To ensure maximum application security, you need a comprehensive,
            multi-layered security approach. We provide this with comprehensive
            application security tools that protect your app and its code from
            potential threats throughout the entire development lifecycle,
            ensuring the highest level of security while safeguarding them from
            vulnerabilities and cyber-attacks.
          </Typography>
          <img
            src="/static/images/content/application.png"
            alt="step12image"
            style={{
              width: "100%",
            }}
          />
        </CardGlass>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack gap={2} height="100%">
          <CardGlass
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            height="100%"
          >
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">
                Static Application Security Testing (SAST)
              </Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Inspecting source code prior to execution, allowing you to
                resolve security issues before the application is developed and
                released.
              </Typography>
            </CardGlass>
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">
                Software Composition Analysis (SCA)
              </Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Evaluates app security that involves analyzing apps, libraries,
                frameworks, and packets for vulnerabilities and security issues.
                released.
              </Typography>
            </CardGlass>
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">Secret Check</Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Examines the source code and app configuration for secret
                information like credentials, tokens, and encryption keys to
                prevent a breach.
              </Typography>
            </CardGlass>
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">Misconfiguration Repository</Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Gathers misconfigured app or system data to help you understand
                application security issues.
              </Typography>
            </CardGlass>
          </CardGlass>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ApplicationModule;
