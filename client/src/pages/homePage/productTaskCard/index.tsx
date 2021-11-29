import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styes';

function ProductTaskCard(props: any) {
  const { label, price, staticSrc, hoverSrc } = props.item;
  const { mainGroupImage, itemHover, img, taskCard, labelStyles } = styles;

  return (
    <Link to='/login'>
      <Box component='div' sx={taskCard}>
        <Box sx={mainGroupImage} zIndex='999'>
          <Box component='img' src={staticSrc} sx={img} />
          <Box sx={itemHover}>
            <Typography component='div' sx={labelStyles}>
              Quick View
            </Typography>
            <Box component='img' src={hoverSrc} sx={img} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography component='div'>{label}</Typography>
        <Typography component='div'>{price}</Typography>
      </Box>
    </Link>
  );
}

export default ProductTaskCard;
