import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  label: { textTransform: 'uppercase', fontSize: '1.2rem', color: '#fff', fontWeight: '400' },
} as const;

function CollectionItemTaskCard(props: any) {
  const { label, src } = props;
  return (
    <Link to='/login'>
      <Box component='div' display='inline-block' position='relative'>
        <Box component='img' src={src} maxWidth='100%' maxHeight='100%' width='auto' height='auto' />
        <Typography component='span' sx={styles.label} position='absolute' right={0} left='40%' top='45%'>
          {label}
        </Typography>
      </Box>
    </Link>
  );
}

export default CollectionItemTaskCard;
