import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Slide,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  styled,
  tooltipClasses,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import * as React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { ArrowDropDown, ArrowForward } from "@mui/icons-material";
import { useMainContext } from "../../contexts/MainContext";

const CustomLink = styled(Link)(() => ({
  color: "#fff",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "2px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    bottom: -5,
    left: 0,
    transformOrigin: "right",
    transform: "scaleX(0)",
    transition: "transform .3s ease-in-out",
  },
  "&:hover::before": {
    transformOrigin: "left",
    transform: "scaleX(1)",
  },
  "&:hover": {
    textDecoration: "none",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#3D4762",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 0,
    maxWidth: "800px",
    top: "10px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
    "&::before": {
      backgroundColor: "#2F364B",
    },
  },
}));

function Header(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { handleOpenDialogLiveDemo } = useMainContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={scrolling ? 1 : 0}
        sx={{
          height: theme.header.height,
          color: theme.header.textColor,
          position: "-webkit-sticky",
          backgroundColor: scrolling ? theme.colors.pimaryAlt : "transparent",
          border: 0,
          transition: "0.3s ease",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <img
                src="/static/images/logo/logo_wordmark_uncolored.png"
                alt="step12image"
                style={{
                  width: "90px",
                }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuOutlinedIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate(``);
                  }}
                >
                  <Typography textAlign="center">Solutions</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate(`articles`);
                  }}
                >
                  <Typography textAlign="center">Articles</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate(`/faqs`);
                  }}
                >
                  <Typography textAlign="center">FAQs</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 3,
              }}
            >
              <img
                src="/static/images/logo/logo_wordmark_uncolored.png"
                alt="step12image"
                style={{
                  width: "90px",
                }}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 4,
                gap: 4,
              }}
            >
              <CustomLink
                onClick={() => {
                  navigate(``);
                }}
              >
                Home
              </CustomLink>
              <LightTooltip
                sx={{ p: 0 }}
                arrow
                placement="bottom-start"
                title={
                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      p={3}
                      sx={{
                        backgroundColor: "#2F364B",
                        borderRadius: "10px 0px 0px 10px ",
                      }}
                    >
                      <Box
                        p={2}
                        sx={{ background: theme.colors.gradients.gradient1 }}
                        borderRadius="10px"
                        height="100%"
                      >
                        <Stack>
                          <Stack>
                            <Typography variant="h5" fontWeight="800">
                              Getting Started
                            </Typography>
                            <Typography variant="subtitle1" color="#E1E9F3">
                              Stay on top of your competition with a great
                              performing app. Your time and energy are not
                              wasted.
                            </Typography>
                          </Stack>
                          <Typography
                            variant="h6"
                            mt={2}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              cursor: "pointer",
                            }}
                            onClick={() => handleOpenDialogLiveDemo()}
                          >
                            Request Live Demo <ArrowForward fontSize="small" />
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                    <Stack p={3} gap={2}>
                      <Typography variant="h5" sx={{ color: "#5EABE3" }}>
                        Solutions
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Stack>
                            <Typography variant="h6">
                              Application Security
                            </Typography>
                            <Typography variant="subtitle2">
                              Invincible Application Security to Shield Your
                              Source Code
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={6}>
                          <Stack>
                            <Typography variant="h6">
                              Dynamic Security
                            </Typography>
                            <Typography variant="subtitle2">
                              The Ultimate App Security, Right in Your Hands
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={6}>
                          <Stack>
                            <Typography variant="h6">
                              Mobile Security
                            </Typography>
                            <Typography variant="subtitle2">
                              The Ultimate App Security, Right in Your Hands
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={6}>
                          <Stack>
                            <Typography variant="h6">
                              Container Security
                            </Typography>
                            <Typography variant="subtitle2">
                              Level Up Your Container Security with Top-Tier
                              Protection
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Stack>
                }
              >
                <CustomLink>
                  Solutions <ArrowDropDown />
                </CustomLink>
              </LightTooltip>
              <CustomLink
                onClick={() => {
                  navigate(`/articles`);
                }}
              >
                Articles
              </CustomLink>
              <CustomLink
                onClick={() => {
                  navigate(`/faqs`);
                }}
              >
                FAQs
              </CustomLink>
            </Box>
          </Toolbar>

          <Button
            sx={{
              position: "relative",
              color: "white",
              borderRadius: "50px",
              px: 3,
              mt: 1,
              background: theme.colors.gradients.gradient1,
            }}
            onClick={() => handleOpenDialogLiveDemo()}
          >
            Live Demo
          </Button>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
