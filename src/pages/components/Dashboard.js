import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import useStyles from '../styles/styles';
"use Client"
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.dashboardBox}>
        <Typography variant="h4" className={classes.text}>
          Dashboard Overview
        </Typography>
        {/* Insert charts, data visualizations, or other content here */}
      </Box>

      <Box mt={5} className={classes.dashboardBox}>
        <Typography variant="h4" className={classes.text}>
          Action Items
        </Typography>
        <Button fullWidth className={classes.actionButton}>
          + Take Action
        </Button>
      </Box>

      <Box mt={5} className={classes.dashboardBox}>
        <Typography variant="h4" className={classes.text}>
          Additional Elements (Charts/Maps)
        </Typography>
        {/* Insert additional components like maps or charts here */}
      </Box>
    </Container>
  );
};

export default Dashboard;
