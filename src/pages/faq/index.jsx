import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  TablePagination,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import useApplyPagination from "../../utils/useApplyPagination";
import dummyFAQ from "../../data/dummyFAQ";
import CardFAQAccordion from "../../components/cards/cardFAQAccordion";

export default function FAQPage() {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);

  const paginatedProject = useApplyPagination(dummyFAQ, page, limit);

  useEffect(() => {
    if (dummyFAQ?.length !== 0) {
      setPage(0);
    }
  }, [dummyFAQ]);

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
        <Box pt="80px">
          <Box py={4}>
            <Stack
              direction="row"
              justifyContent="space-between"
              mb={3}
              alignItems="center"
            >
              <Stack>
                <Typography
                  variant="h1"
                  mb={0.5}
                  sx={{
                    background: theme.colors.gradients.gradient1,
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                  }}
                >
                  Frequently Ask Question
                </Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor
                  sit amet, consectetur.{" "}
                </Typography>
              </Stack>
            </Stack>
            <Grid container spacing={2} mb={2}>
              {paginatedProject?.map((data, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Box>
                    <CardFAQAccordion data={data} />
                  </Box>
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
                rowsPerPageOptions={[12, 24, 36]}
              />
            </Card>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
