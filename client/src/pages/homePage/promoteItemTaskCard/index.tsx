import { Box, Typography } from '@mui/material';
import CustomizedButtons from 'providers/Button';
import React from 'react';
import styles from './styles';

function PromoteItemTaskCard(props: any) {
  const { src, label, subLabel, buttonLabel, id } = props.item;
  const { promoteItemOnClick } = props;
  const { button, labelStyles, img, subLabelStyles, taskCardContent } = styles;
  return (
    <Box component='div' display='inline-block' position='relative'>
      <Box component='img' src={src} sx={img} />
      <Box component='div' sx={taskCardContent}>
        <Typography sx={subLabelStyles}>{subLabel}</Typography>
        <Typography sx={labelStyles}>{label}</Typography>
        <CustomizedButtons
          content={buttonLabel}
          sx={button}
          onClick={() => {
            promoteItemOnClick(id);
          }}
        />
      </Box>
    </Box>
  );
}

export default PromoteItemTaskCard;
