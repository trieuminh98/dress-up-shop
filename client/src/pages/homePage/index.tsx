import React from 'react';
import heroCarausel from 'assets/images/hero-carousel.jpg';
import { Box, Container, Grid } from '@mui/material';
import CollectionItemTaskCard from './collectionItemTaskCard';
import collectionItem from 'common/json/collectionItem';

function HomePage() {
  return (
    <Box>
      <Box component='img' sx={{ width: '100%' }} src={heroCarausel} alt='hero carausel' />
      <Container maxWidth='xl' sx={{ mt: 6, mb: 4 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {collectionItem.map(({ id, label, src }) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={id}>
              <CollectionItemTaskCard {...{ label, src }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
