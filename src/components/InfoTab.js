import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const InfoTab = () => (
  <Box p={3}>
    <Typography variant="h4" gutterBottom>Training Club Gym</Typography>
    <Typography>Welcome to Training Club, your premier destination for fitness and wellness!</Typography>
    
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>About Us</Typography>
      <Typography>Training Club is more than just a gym; we're a community dedicated to helping you achieve your fitness goals. Our state-of-the-art facilities, experienced trainers, and diverse classes make us the perfect choice for anyone looking to start or continue their fitness journey.</Typography>
    </Box>
    
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Facilities</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Fully equipped gym with cardio and strength training equipment" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Group fitness classes including yoga, spin, and HIIT" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Personal training sessions tailored to your needs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Relaxing sauna and steam room" />
        </ListItem>
      </List>
    </Box>
    
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Contact Us</Typography>
      <Typography>Address: 123 Fitness Avenue, Fitness Town, Fitland</Typography>
      <Typography>Phone: (555) 123-4567</Typography>
      <Typography>Email: info@trainingclub.com</Typography>
    </Box>
    
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>Hours of Operation</Typography>
      <Typography>Monday to Friday: 6:00 AM - 10:00 PM</Typography>
      <Typography>Saturday and Sunday: 8:00 AM - 8:00 PM</Typography>
    </Box>
  </Box>
);

export default InfoTab;
