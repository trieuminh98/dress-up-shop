import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import { breachScrumSubContent } from 'common/mapping/mapping';
import * as React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const ColorBreadcrumbs = styled(Breadcrumbs)(() => ({
  '& > ol': {
    justifyContent: 'center',
    '& p': {
      fontSize: '10px',
      color: '#757575',
    },
    'li > p': {
      fontSize: '11px',
    },
  },
  margin: '30px 0',
  textTransform: 'uppercase',
}));

function handleClick(event: any) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs(props: any) {
  const { ...remainProps } = props;
  let history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [subContent] = useState(breachScrumSubContent.get(pathname));

  return (
    <div role='presentation' onClick={handleClick}>
      <ColorBreadcrumbs {...remainProps} aria-label='breadcrumb'>
        <Link to='/home'>
          <Typography>Home</Typography>
        </Link>
        <Typography color='text.primary'>{subContent}</Typography>
      </ColorBreadcrumbs>
    </div>
  );
}
