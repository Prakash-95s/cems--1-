import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import useStyles from '../styles/styles';

const EnergyComparisonPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.comparisonContainer}>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Energy Comparison Page
        </Typography>
        <Paper elevation={3} className={classes.comparisonPaper}>
          <Typography variant="h6" gutterBottom>
            Conservative vs. Renewable Energy Comparison
          </Typography>
        </Paper>
        <Box className={classes.comparisonBox}>
          <Paper elevation={3} className={classes.comparisonBlock}>
            <Typography variant="h6" gutterBottom>
              Conservative Energy
            </Typography>
            {/* Add data or charts */}
          </Paper>
          <Paper elevation={3} className={classes.comparisonBlock}>
            <Typography variant="h6" gutterBottom>
              Renewable Energy
            </Typography>
            {/* Add data or charts */}
          </Paper>
        </Box>
        <Paper elevation={3} className={classes.comparisonPaper}>
          <Typography variant="h6" gutterBottom>
            Price Comparison (Cost per kWh)
          </Typography>
          {/* Add data or charts */}
        </Paper>
        <Paper elevation={3} className={classes.comparisonPaper}>
          <Typography variant="h6" gutterBottom>
            Energy Consumption Comparison (kWh)
          </Typography>
          {/* Add data or charts */}
        </Paper>
      </Box>
    </Container>
  );
};

export default EnergyComparisonPage;
