import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TablePagination,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CardArticle from "../../components/cards/cardArticle";
import dummyArticle from "../../data/dummyArticle";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import useApplyPagination from "../../utils/useApplyPagination";

export default function ArticlePage() {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(6);

  const paginatedProject = useApplyPagination(dummyArticle, page, limit);

  useEffect(() => {
    if (dummyArticle?.length !== 0) {
      setPage(0);
    }
  }, [dummyArticle]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container
      maxWidth="100vw"
      style={{ paddingRight: 0, paddingLeft: 0, backgroundColor: "#191F31" }}
    >
      <Container maxWidth="lg">
        <Box pt="80px" mb={4}>
          <Stack mb={4} mt={4} alignItems="center">
            <Typography
              variant="h1"
              mb={0.5}
              sx={{
                background: theme.colors.gradients.gradient1,
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Articles
            </Typography>
            <Typography variant="subtitle2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit
              amet, consectetur.{" "}
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Stack gap={2}>
                <Card>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    placeholder="Search Article..."
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Search fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Card>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Categories</Typography>
                  <Stack
                    mt={2}
                    gap={1}
                    divider={
                      <Divider
                        orientation="horizontal"
                        sx={{ backgroundColor: theme.colors.secondary.lighter }}
                      />
                    }
                  >
                    <Typography variant="body1">
                      Application Security
                    </Typography>
                    <Typography variant="body1">Dynamic Security</Typography>
                    <Typography variant="body1">Monitoring Security</Typography>
                    <Typography variant="body1">Mobile Security</Typography>
                    <Typography variant="body1">Container Security</Typography>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Grid container spacing={2} mb={2}>
                  {paginatedProject?.map((data, i) => (
                    <Grid item xs={12} md={4} key={i}>
                      <CardArticle
                        title={data?.title}
                        tag={data?.tag}
                        date={data?.date}
                        imageUrl={data?.imageUrl}
                        description={data?.description}
                        height="100%"
                      />
                    </Grid>
                  ))}
                </Grid>
                <Card sx={{ px: 2 }}>
                  <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={limit}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[6, 12, 24]}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
