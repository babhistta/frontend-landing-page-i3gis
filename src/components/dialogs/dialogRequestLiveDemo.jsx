import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMainContext } from "../../contexts/MainContext";
import RequiredTick from "../common/RequiredTick";

function DialogRequestLiveDemo() {
  const { openDialogLiveDemo, handleCloseDialogLiveDemo } = useMainContext();
  return (
    <Dialog
      open={openDialogLiveDemo}
      maxWidth={"md"}
      fullWidth
      scroll="paper"
      onClose={() => {
        handleCloseDialogLiveDemo();
      }}
    >
      <DialogTitle
        display="flex"
        p={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box sx={{ transition: "all 0.3s ease-in-out" }}>
            <Typography variant="h4">
              Start Your DevSecOps Journey NOW!
            </Typography>
            <Typography variant="subtitle2">
              Fill the form below, your personal information will not be
              published. Required field are marked *
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <Divider />
      <DialogContent p={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" display="flex" mb={1}>
              Name
              <RequiredTick />
            </Typography>
            <TextField fullWidth placeholder="Requester Name" name="name" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" display="flex" mb={1}>
              Phone Number
              <RequiredTick />
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. +62 123 456 7890"
              name="phone"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" display="flex" mb={1}>
              Emain
              <RequiredTick />
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. someone@example.com"
              name="email"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" display="flex" mb={1}>
              Company Name
              <RequiredTick />
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g. PT. Example"
              name="company"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" display="flex" mb={1}>
              Message
              <RequiredTick />
            </Typography>
            <TextField fullWidth name="company" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogRequestLiveDemo;
