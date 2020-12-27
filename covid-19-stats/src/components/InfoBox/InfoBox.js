import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './InfoBox.css';

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>
        <h3 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
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
