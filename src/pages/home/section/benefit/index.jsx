import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import CardGlass from "../../../../components/cards/cardGlass";
import CardIcon from "../../../../components/cards/cardIcon";
import {
  Monitor,
  Savings,
  SupportAgent,
  Verified,
  ViewModule,
} from "@mui/icons-material";

function BenefitSection() {
  const theme = useTheme();
  const contentBenefit = [
    {
      title: "End-to-End DevSecOps Solution",
      description:
        "i3GIS offers comprehensive DevSecOps solution to help business fulfill security standard in Indonesia.",
      icon: Verified,
    },
    {
      title: "Single Dashboard Management",
      description:
        "Manage all aspects of DevSecOps implementation with ease to accelerate your business growth.",
      icon: Monitor,
    },
    {
      title: "Modular Features for Business",
      description:
        "Simple to use with existing software that the company has already been using. You can also use which module based on what company most needed.",
      icon: ViewModule,
    },
    {
      title: "Cost Saving Potential",
      description:
        "Save more cost by only paying once for more features and modules, no more extra cost for different solutions from various vendors.",
      icon: Savings,
    },
    {
      title: "Focus on Customer Satisfaction",
      description:
        "As the business grows, i3GIS team will facilitate the company’s feedback or request related to which features they need to meet future demands.",
      icon: SupportAgent,
    },
  ];
  return (
    <Box
      sx={{
        height: "fit-content",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#091125",
        width: "100%",
        gap: 4,
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack alignItems="center" mb={4}>
          <Typography
            variant="h2"
            sx={{
              background: theme.colors.gradients.gradient1,
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Why i3gis ?
          </Typography>
          <Typography variant="subtitle1">
            Become Compliance DevSecOps Tools for Business
          </Typography>
        </Stack>

        <Grid container spacing={2}>
          {contentBenefit?.map((data, i) => (
            <Grid item xs={12} md={6} key={i}>
              <CardGlass p={2} display="flex" gap={2} alignItems="center">
                <CardIcon icon={data.icon} />
                <Stack gap={0.5}>
                  <Typography variant="h5">{data?.title}</Typography>
                  <Typography variant="subtitle2" lineHeight={1.3}>
                    {data?.description}
                  </Typography>
                </Stack>
              </CardGlass>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BenefitSection;
