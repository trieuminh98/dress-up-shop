import { Box, Container, Grid, Typography } from '@mui/material';
import exclusivesBanner from 'assets/images/exclusives-banner.jpg';
import heroCarausel from 'assets/images/hero-carousel.jpg';
import saleBanner from 'assets/images/sale-banner.jpg';
import displayItems from 'common/json/collectionItem';
import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import CollectionItemTaskCard from './collectionItemTaskCard';
import ProductTaskCard from './productTaskCard';
import PromoteItemTaskCard from './promoteItemTaskCard';
import styles from './styles';
import TypeBanner from './typeBanner';

function HomePage() {
  const { collectionItems, promoteItems, productItems } = displayItems;
  const { richText, mainContent, heroCarauselStyle } = styles;
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
      <Box overflow='hidden'>
        <motion.div initial={{ x: '10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Box sx={heroCarauselStyle} component='img' src={heroCarausel} alt='hero carausel' />
        </motion.div>
        {/* <motion.div initial={{ x: '10vw', opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}  viewport={{ once: true }}>
          <Box sx={heroCarauselStyle} component='img' src={heroCarausel} alt='hero carausel' />
        </motion.div> */}
      </Box>
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
        <Box overflow='hidden'>
          <motion.div initial={{ x: '10vw', opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <Banner bannerUrl={exclusivesBanner} />
          </motion.div>
        </Box>
        <Container maxWidth='xl' sx={{ mt: 6, mb: 4 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {productItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={item.id}>
                <ProductTaskCard {...{ item }} />
              </Grid>
            ))}
          </Grid>
          <Box sx={richText}>
            <Typography sx={mainContent}>Trendy Clothing & Accessories at Dress Up - An Online Dress Boutique</Typography>
            <Typography>
              Dress Up is a women's clothing store with new trendy and affordable arrivals dropping 2-3 times weekly. Shop the latest trends in
              women's fashion dresses, tops, sweaters, skirts, jeans, accessories & more. At Dress Up, you can shop at one of the 18 locations across
              the southeast, or online 24/7 at <a href='/'>ShopDressup.com.</a>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
