import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import CardArticle from "../../../../components/cards/cardArticle";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import dummyArticle from "../../../../data/dummyArticle";

function ArticleSection() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "fit-content",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#191F31",
        width: "100%",
        gap: 4,
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "relative",
          mb: 2,
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
        Articles
      </Typography>
      <Stack direction="row" gap={2}>
        {dummyArticle?.map((data, i) => (
          <CardArticle
            key={i}
            title={data?.title}
            tag={data?.tag}
            date={data?.date}
            imageUrl={data?.imageUrl}
            description={data?.description}
            height="280px"
          />
        ))}
      </Stack>
      <Button
        size="large"
        sx={{ color: "#337BAF" }}
        endIcon={<ArrowForward fontSize="small" />}
        onClick={() => {
          navigate(`/articles`);
        }}
      >
        View All Article
      </Button>
    </Box>
  );
}

export default ArticleSection;
