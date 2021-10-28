import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './styles';

function NavigationBox(props: any) {
  const { navItemList, show } = props as any;
  const { navBox, navItemHeader, navItem } = styles;
  return (
    <Box sx={{ ...navBox, ...{ display: show ? 'flex' : 'none', textTransform: 'uppercase', position: 'absolute' } }}>
      {navItemList.map(({ key = '', itemList = [] }) => {
        return (
          <>
            <Box sx={{ width: '15%', p: '0 10px' }}>
              <Typography sx={navItemHeader}>{key}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                {(itemList as any).map((item: any) => {
                  return <Box sx={navItem}>{item.description}</Box>;
                })}
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
}

export default NavigationBox;
