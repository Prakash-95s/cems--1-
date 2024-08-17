import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // Common styles
  container: {
    // padding: theme.spacing(3),
    backgroundColor: '#E0F7FA', // Light green background
    // borderRadius: theme.shape.borderRadius,
  },
  appBar: {
    backgroundColor: '#388E3C', // Dark green
    // marginBottom: theme.spacing(3),
  },
  button: {
    backgroundColor: '#388E3C', // Dark green
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2E7D32', // Slightly darker green on hover
    },
  },
  text: {
    color: '#388E3C', // Dark green text
  },

  // Dashboard specific styles
  dashboardBox: {
    // marginTop: theme.spacing(5),
    // padding: theme.spacing(2),
    backgroundColor: '#E0F7FA',
    // borderRadius: theme.shape.borderRadius,
  },
  actionButton: {
    // marginTop: theme.spacing(2),
    // padding: theme.spacing(2),
    backgroundColor: '#388E3C',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#2E7D32',
    },
  },

  // Floor map container
  mapContainer: {
    height: '400px',
    // marginTop: theme.spacing(3),
    // borderRadius: theme.shape.borderRadius,
  },
}));

export default useStyles;
