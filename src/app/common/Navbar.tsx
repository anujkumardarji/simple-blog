import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';

function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link href={`/`} passHref>
              Blogs
             </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
