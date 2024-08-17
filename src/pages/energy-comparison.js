import React from 'react';
import { Container, AppBar, Toolbar, Button } from '@mui/material';
import Dashboard from './components/Dashboard';
import useStyles from './styles/styles';
import EnergyComparisonPage from './components/EnergyComparisonPage';
import { NavigationMenu } from './components/NavigationMenu';
export default function EnergyComparison() {
  const classes = useStyles();
  return (
    <>
    <Container>
        <NavigationMenu/>
     <EnergyComparisonPage/>
    </Container>
  </>
  )
}

