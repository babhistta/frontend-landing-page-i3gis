import { Box, Stack, Typography, useTheme } from "@mui/material";

function PartnerSection() {
  const theme = useTheme();
  const partnerArr = [
    "partner-1.png",
    "partner-2.png",
    "partner-3.png",
    // "partner-4.png",
    // "partner-5.png",
  ];
  return (
    <Box
      sx={{
        height: "280px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#191F31",
        width: "100%",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "relative",
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
        Our Top Partners
      </Typography>
      <Stack direction="row" alignItems="center" gap={8}>
        {partnerArr?.map((data) => (
          <img
            src={`/static/images/partner/${data}`}
            alt="step12image"
            key={data}
            style={{
              width: "100px",
              bottom: "-30vh",
              filter: "contrast(500%) brightness(30%) saturate(0) invert(80%)",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default PartnerSection;
