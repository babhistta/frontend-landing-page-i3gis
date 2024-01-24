import { Typography } from "@mui/material";

function RequiredTick() {
  return (
    <Typography sx={{ fontWeight: 600 }} width="fit-content" color="error">
      &nbsp;*
    </Typography>
  );
}

export default RequiredTick;
