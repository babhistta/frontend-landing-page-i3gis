import { Grid, Stack, Typography } from "@mui/material";
import CardGlass from "../../../../../components/cards/cardGlass";
import CardIcon from "../../../../../components/cards/cardIcon";
import { PhoneAndroid } from "@mui/icons-material";

function MobileModule() {
  return (
    <>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={12}>
          <CardGlass display="flex" flexDirection="column" alignItems="start">
            <Stack alignItems="start" width="50%" gap={1}>
              <CardIcon icon={PhoneAndroid} />
              <Typography variant="h4">
                The Ultimate App Security, Right in Your Hands
              </Typography>
              <Typography variant="subtitle2" mb={2}>
                Our Mobile Security solution helps keep your mobile applications
                secure by scanning them for vulnerabilities. It analyzes the
                source code, architecture, and configuration of your mobile app
                to identify potential weaknesses such as SQL injection, OWASP
                Top 10 attacks, and other types of threats.
              </Typography>
            </Stack>
            <img
              src={`/static/images/content/mobile.png`}
              alt="step12image"
              style={{
                height: "230px",
                position: "absolute",
                right: "0",
                bottom: "0",
              }}
            />
          </CardGlass>
        </Grid>
        <Grid item xs={12} md={7}>
          <CardGlass
            display="flex"
            flexDirection="column"
            gap={1}
            height="280px"
            alignItems="center"
          >
            <img
              src={`/static/images/content/mobile-result.png`}
              alt="step12image"
              style={{
                height: "250px",
                position: "absolute",
                bottom: "0",
              }}
            />
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
              <CardGlass glassType="blue" p={2} width="100%">
                <Typography variant="h5">Android APK Scan</Typography>
                <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                  APK (Android Package Kit) file scanning to detect
                  vulnerability.
                </Typography>
              </CardGlass>
              <CardGlass glassType="blue" p={2} width="100%">
                <Typography variant="h5">iOS IPA Scan</Typography>
                <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                  IPA file in iOS scanning to detect vulnerability.
                </Typography>
              </CardGlass>
            </CardGlass>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default MobileModule;
