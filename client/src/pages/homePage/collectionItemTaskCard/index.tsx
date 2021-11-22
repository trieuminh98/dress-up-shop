import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  label: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    color: '#fff',
    fontWeight: '400',
  },
  mainGroupImage: {
    maxWidth: '100%',
    '-webkit-transition': 'all 1s ease' /* Safari and Chrome */,
    '-moz-transition': 'all 1s ease' /* Firefox */,
    '-ms-transition': 'all 1s ease' /* IE 9 */,
    '-o-transition': 'all 1s ease' /* Opera */,
    transition: 'all 1s ease',
    '&:hover': {
      '-webkit-transform': 'scale(1.05)' /* Safari and Chrome */,
      '-moz-transform': 'scale(1.05)' /* Firefox */,
      '-ms-transform': 'scale(1.05)' /* IE 9 */,
      '-o-transform': 'scale(1.05)' /* Opera */,
      transform: 'scale(1.05)',
      '&::after': {
        opacity: 0.3,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 'auto',
      backgroundColor: '#000',
      opacity: 0.1,
      transition: 'opacity .8s ease',
    },
  },
} as const;

function CollectionItemTaskCard(props: any) {
  const { label, src } = props;
  return (
    <Link to='/login'>
      <Box component='div' display='inline-block' position='relative' overflow='hidden'>
        <Box sx={styles.mainGroupImage} zIndex='999'>
          <Box component='img' src={src} maxWidth='100%' maxHeight='100%' width='auto' height='auto' />
          <Typography component='span' sx={styles.label} position='absolute' right={0} left='40%' top='45%' zIndex='998'>
            {label}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

export default CollectionItemTaskCard;
