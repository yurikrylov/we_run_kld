import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Header = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h1" gutterBottom sx={{ fontWeight: 'medium' }}>
        WE RUN KLD
      </Typography>
      </Box>
  )
}

export default Header