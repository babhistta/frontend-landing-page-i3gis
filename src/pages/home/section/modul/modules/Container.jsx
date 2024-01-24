import { Grid, Stack, Typography } from "@mui/material";
import CardGlass from "../../../../../components/cards/cardGlass";
import CardIcon from "../../../../../components/cards/cardIcon";
import ContainerIcon from "../../../../../assets/modules/ContainerIcon";

function ContainerModule() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <CardGlass
          display="flex"
          flexDirection="column"
          gap={1}
          alignItems="start"
          mb={2}
        >
          <CardIcon icon={ContainerIcon} />
          <Typography variant="h4">
            Level Up Your Container Security with Top-Tier Protection
          </Typography>
          <Typography variant="subtitle2" mb={2}>
            We protect application containers prior to deployment and
            installation to ensure they are protected from cyber attacks and
            conform to security standards and privacy regulations. This module
            is still in development and will be coming soon.
          </Typography>
        </CardGlass>
        <CardGlass
          display="flex"
          flexDirection="column"
          gap={1}
          alignItems="center"
          height="300px"
        >
          <img
            src="/static/images/content/container.png"
            alt="step12image"
            style={{
              position: "absolute",
              bottom: "0",
              height: "270px",
            }}
          />
        </CardGlass>
      </Grid>
      <Grid item xs={12} md={5}>
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
                Authentication and Authorization
              </Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Ensure that only authorized people have access to the containers
                and their apps.
              </Typography>
            </CardGlass>
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">Runtime Security</Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Ensure that the container and its app continue running during
                runtime.
              </Typography>
            </CardGlass>
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">Data & Network Security</Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Prioritize Data & Network Security in your containerized app to
                safeguard data transmission and protect communication channels
                between containers and their ecosystem.
              </Typography>
            </CardGlass>
            <CardGlass glassType="blue" p={2}>
              <Typography variant="h5">Monitoring and Audit</Typography>
              <Typography variant="subtitle2" lineHeight={1.3} mt={0.5}>
                Monitor activities and do regular audits to ensure that the
                containerized app is running properly.
              </Typography>
            </CardGlass>
          </CardGlass>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ContainerModule;
