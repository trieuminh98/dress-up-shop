import React from 'react';
import heroCarausel from 'assets/images/hero-carousel.jpg';
import { Box, Container, Grid } from '@mui/material';
import CollectionItemTaskCard from './collectionItemTaskCard';
import displayItems from 'common/json/collectionItem';
import PromoteItemTaskCard from './promoteItemTaskCard';
import { useHistory } from 'react-router';

function HomePage() {
  const { collectionItems, promoteItems } = displayItems;
  const history = useHistory();

  const redirectUrl = {
    PI1: '/PI1',
    PI2: '/PI2',
  } as any;

  const promoteItemOnClick = (itemId: string) => {
    const url = redirectUrl[itemId];
    console.log('redirect to:', url);
    history.push(url);
  };

  return (
    <Box>
      <Box component='img' sx={{ width: '100%' }} src={heroCarausel} alt='hero carausel' />
      <Container maxWidth='xl' sx={{ mt: 6, mb: 4 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {collectionItems.map(({ id, label, src }) => (
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={id}>
              <CollectionItemTaskCard {...{ label, src }} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid p='0 10px' container spacing={1}>
        {promoteItems.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={item.id}>
            <PromoteItemTaskCard {...{ item, promoteItemOnClick }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
