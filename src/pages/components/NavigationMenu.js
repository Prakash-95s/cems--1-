'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Container, AppBar, Toolbar, Button } from '@mui/material';
import useStyles from '../styles/styles';
export function NavigationMenu() {
  const pathname = usePathname()
  const classes = useStyles();
  return (
    <nav>
       <AppBar position="static" className={classes.appBar}>
       <Toolbar>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/floormap' ? 'active' : ''}`}
        href="/floormap"
      >
        Floormap
      </Link>
      <Link
        className={`link ${pathname === '/energy-comparison' ? 'active' : ''}`}
        href="/energy-comparison"
      >
        Energy Comparison 
      </Link>
      <Link
        className={`link ${pathname === '/carbon-footprint' ? 'active' : ''}`}
        href="/carbon-footprint"
      >
       Carbon Footprint
      </Link>
      <Link
        className={`link ${pathname === '/login' ? 'active' : ''}`}
        href="/login"
      >
        Login
      </Link>

      </Toolbar>
      </AppBar>
    </nav>
  )
}