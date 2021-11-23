import React from 'react';
import heroCarausel from 'assets/images/hero-carousel.jpg';
import { Box, Container, Grid } from '@mui/material';
import CollectionItemTaskCard from './collectionItemTaskCard';
import displayItems from 'common/json/collectionItem';
import PromoteItemTaskCard from './promoteItemTaskCard';
import { useHistory } from 'react-router';
import TypeBanner from './typeBanner';
import saleBanner from 'assets/images/sale-banner.jpg';
import exclusivesBanner from 'assets/images/exclusives-banner.jpg';
import { Link } from 'react-router-dom';
import ProductTaskCard from './productTaskCard';

function HomePage() {
  const { collectionItems, promoteItems, productItems } = displayItems;
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

  const Banner = (props: any) => {
    const { bannerUrl } = props;
    return (
      <Link to='/login'>
        <Box component='img' src={bannerUrl} pt={1} width='100%' />
      </Link>
    );
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
      <Box p='0 10px'>
        <Grid container spacing={1}>
          {promoteItems.map((item) => (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={item.id}>
              <PromoteItemTaskCard {...{ item, promoteItemOnClick }} />
            </Grid>
          ))}
        </Grid>
        <TypeBanner leftCnt='shop new collections 2-3x weekly' rightCnt='SHOP OUR LATEST RELEASE' bgColor='#f7ede8' />
        <Banner bannerUrl={saleBanner} />
        <TypeBanner leftCnt='GIFT IDEA FOR THE GIRL WHO HAS EVERYTHING' rightCnt='SHOP GIFT CARDS' bgColor='#f7ede8' />
        <Banner bannerUrl={exclusivesBanner} />
        <Container maxWidth='xl' sx={{ mt: 6, mb: 4 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {productItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={item.id}>
                <ProductTaskCard {...{ item }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
