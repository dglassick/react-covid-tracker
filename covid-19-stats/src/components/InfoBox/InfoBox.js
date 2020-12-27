import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({ title, cases, total }) {
  return (
    <Card className='infoBox'>
      <CardContent>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>
        <h3 className='infoBox__cases'>
          {cases} New {title === 'Coronavirus Cases' ? 'Cases' : title}
        </h3>
        <Typography className='infoBox__total' color='textSecondary'>
          {total} total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
