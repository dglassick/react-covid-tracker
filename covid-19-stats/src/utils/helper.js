import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

const casesTypeColors = {
  cases: {
    option: { color: '#cc1034', fillColor: '#cc1034' },
    multiplier: 300
  },
  recovered: {
    option: { color: '#7dd71d', fillColor: '#7dd71d' },
    multiplier: 400
  },
  deaths: {
    option: { color: '#ff6c47', fillColor: '#ff6c47' },
    multiplier: 1200
  }
};

export const sortData = data => {
  const sortedData = [...data];

  sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
  return sortedData;
};

export const prettyPrintStat = stat =>
  stat ? `+${numeral(stat).format('0.0a')}` : '+0';

export const showDataOnMap = (data, casesType = 'cases') =>
  data.map(country => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      pathOptions={casesTypeColors[casesType].option}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup className='info__container'>
        <div>
          <div
            className='info__flag'
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className='info__name'>{country.country}</div>
          <div className='info__confirmed'>
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className='info__recovered'>
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
          <div className='info__deaths'>
            Deaths: {numeral(country.deaths).format('0,0')}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
