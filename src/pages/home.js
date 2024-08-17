import React from 'react';
import { Container, AppBar, Toolbar, Button } from '@mui/material';
import Dashboard from './components/Dashboard';
import useStyles from './styles/styles';
import { NavigationMenu } from './components/NavigationMenu';
export default function HomePage() {
  const classes = useStyles();
  return (
    <>
    <NavigationMenu/>
   
    <Container>
      <Dashboard />
    </Container>
  </>
  )
}

