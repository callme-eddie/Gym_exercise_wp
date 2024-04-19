import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-3.png';

const Footer = () => (
  <Box mt="70px" bgcolor="#8d99ae">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="18px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">made 4/18/2024 by @callme-eddie</Typography>
  </Box>
);

export default Footer;