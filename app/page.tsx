import { Box, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Welcome to my website!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl vel bibendum bibendum, elit elit bibendum elit, nec bibendum elit
        elit. Sed euismod, nisl vel bibendum bibendum, elit elit bibendum elit,
        nec bibendum elit elit.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sed euismod, nisl vel bibendum bibendum, elit elit bibendum elit, nec
        bibendum elit elit. Sed euismod, nisl vel bibendum bibendum, elit elit
        bibendum elit, nec bibendum elit elit.
      </Typography>
    </Box>
  );
};

export default HomePage;
