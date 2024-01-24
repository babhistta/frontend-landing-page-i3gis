import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  CallMergeOutlined,
  DoorFrontOutlined,
  EmojiObjects,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#091125",
        width: "100%",
        px: { xs: 2, md: 4 },
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <Stack gap={2} direction={{ xs: "row", md: "column" }}>
              <img
                src="/static/images/logo/logo_wordmark_uncolored.png"
                alt="step12image"
                style={{
                  width: "100px",
                  height: "auto",
                }}
              />
              <img
                src="/static/images/logo/logo_i3.png"
                alt="step12image"
                style={{
                  width: "100px",
                  height: "auto",
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack gap={1}>
              <Stack direction="row" alignItems="center" gap={1}>
                <EmojiObjects fontSize="small" />
                <Typography variant="h5">Solutions</Typography>
              </Stack>
              <Typography variant="subtitle1">Application Security</Typography>
              <Typography variant="subtitle1">Dynamic Security</Typography>
              <Typography variant="subtitle1">Mobile Security</Typography>
              <Typography variant="subtitle1">Container Security</Typography>
              <Typography variant="subtitle1">Monitoring Security</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack gap={1}>
              <Stack direction="row" alignItems="center" gap={1}>
                <CallMergeOutlined fontSize="small" />
                <Typography variant="h5">Resources</Typography>
              </Stack>
              <Typography variant="subtitle1">Articles</Typography>
              <Typography variant="subtitle1">Documentation</Typography>
              <Typography variant="subtitle1">FAQs</Typography>
              <Typography variant="subtitle1">Community</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack gap={1}>
              <Stack direction="row" alignItems="center" gap={1}>
                <DoorFrontOutlined fontSize="small" />
                <Typography variant="h5">Get In Touch</Typography>
              </Stack>
              <Typography variant="subtitle1">Contact us</Typography>
              <Stack>
                <Typography variant="subtitle1">info@i-3.co.id</Typography>
                <Typography variant="subtitle1">(+62) 21 290 23393</Typography>
              </Stack>
              <Typography variant="h6">
                PT. Inovasi Informatika Indonesia (i3)
              </Typography>
              <Typography variant="subtitle1">
                Graha BIP 6th FloorJl Jend. Gatot Subroto Kav.23Jakarta 12930,
                Indonesia
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            gap={1}
            divider={<Divider orientation="vertical" sx={{ my: 0.5 }} />}
          >
            <Typography variant="subtitle1" whiteSpace="nowrap">
              ©2023 i3gis Inc., All Rights Reserved
            </Typography>
            <Typography variant="subtitle1" whiteSpace="nowrap">
              Terms of Service
            </Typography>
            <Typography variant="subtitle1">Privacy Policy</Typography>
          </Stack>
          <Stack direction="row" gap={1}>
            <Instagram />
            <Facebook />
            <LinkedIn />
            <YouTube />
          </Stack>
        </Stack>
        <Typography variant="subtitle2" fontSize="10px" mt={2}>
          i3GIS is part of PT Inovasi Informatika Nusantara (i3), providing
          Comprehensive Consulting Solution, Implementation, Migration,
          Preventive and Corrective Maintenance, Managed Services, training that
          cover Infrastructure, Middleware, Cloud, Data Management, DevSecOps,
          and IT Security. As our vision to be the compliance DevSecOps tools
          for business, i3GIS is supported by a team of 50+ skilled and
          experienced consultants with 231 certifications to assist your
          business needs.
        </Typography>
      </Container>
    </Box>
  );
}
