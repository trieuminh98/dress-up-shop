import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';
import styles from './styles';

function NavigationBox(props: any) {
  const { navItemList, index } = props as any;
  const { navBox, navItemHeader, navItem, navContent } = styles;
  return (
    <Box component='div' id={`menu-${index}`} sx={navBox}>
      {navItemList.map(({ key: keyItem = '', itemList = [] }, index: string) => {
        return (
          <Fragment key={index}>
            <Box sx={navContent} id={'nav-content'}>
              <Typography sx={navItemHeader}>{keyItem}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 0.5 }}>
                {(itemList as any).map((item: any, index: string) => {
                  return (
                    <Box key={index} sx={navItem}>
                      {item.description}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Fragment>
        );
      })}
    </Box>
  );
}

export default NavigationBox;
