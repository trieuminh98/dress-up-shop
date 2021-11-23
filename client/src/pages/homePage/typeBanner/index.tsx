import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

function TypeBanner(props: any) {
  const { leftCnt, rightCnt, bgColor } = props;
  const { typeBanner, leftContent, rightContent } = styles;
  return (
    <Link to='/login'>
      <Box sx={{ ...typeBanner, ...{ bgColor: bgColor ? bgColor : '#f7ede8' } }}>
        <Box sx={leftContent}>{leftCnt}</Box>
        <Box sx={rightContent}>{rightCnt}</Box>
      </Box>
    </Link>
  );
}

export default TypeBanner;
