"use Client"
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import useStyles from './styles/styles';
import { NavigationMenu } from './components/NavigationMenu';

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <NavigationMenu/>
      <Box>
        <Typography variant="h4" component="h1" align="center" className={classes.text}>
          Login Page
        </Typography>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#388E3C' }, // Green color
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            style: { color: '#388E3C' }, // Green color
          }}
        />
        <Button fullWidth variant="contained" className={classes.button} size="large">
          Login
        </Button>
      </Box>
    </Container>
  );
}
