import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/knplogo.png';
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="200px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Kevin Ng <br/>
          kevinng3292@gmail.com <br/>
          908-956-1282
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer
