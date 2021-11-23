import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

function CollectionItemTaskCard(props: any) {
  const { label, src } = props;
  const { mainGroupImage, labelStyles, img, taskCard } = styles;
  return (
    <Link to='/login'>
      <Box component='div' sx={taskCard}>
        <Box sx={mainGroupImage} zIndex='999'>
          <Box component='img' src={src} sx={img} />
          <Typography component='span' sx={labelStyles}>
            {label}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default CollectionItemTaskCard;
