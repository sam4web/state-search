import { useState } from 'react';
import { SiGooglemaps } from 'react-icons/si';
import ShowDataList from './ShowDataList';

export default function CountryCard({ countryData }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getDataList = (data) => {
    let currencyList = [];
    for (const [key, value] of Object.entries(data)) {
      currencyList.push(value);
    }
    return currencyList;
  };

  return (
    <>
      <div className='country-card'>
        <div className='country-card__block-container'>
          <div className='country-card__block'>
            <img
              src={countryData.flags.svg}
              alt={countryData.flags.alt}
              className='country-card__flag'
            />
            {/* country-card__flag */}
          </div>
          {/* country-card__block */}

          <div className='country-card__block'>
            <h2 className='country-name'>{countryData.name.common}</h2>

            <div className='country-card__item'>
              <span className='data-key'>Area: </span>
              <span className='data-value'>
                {countryData.area.toLocaleString()} km<sup>2</sup>
              </span>
            </div>
            {/* country-area */}

            <div className='country-card__item'>
              <span className='data-key'>Latitude: </span>
              <span className='data-value'>
                {countryData.latlng[0]}
                <sup>&deg;</sup> N
              </span>
            </div>
            {/* country-latitude */}

            <div className='country-card__item'>
              <span className='data-key'>Longitude: </span>
              <span className='data-value'>
                {countryData.latlng[1]}
                <sup>&deg;</sup> E
              </span>
            </div>
            {/* country-longitude */}

            <div className='country-card__item country-population'>
              <span className='data-key'>Population: </span>
              <span className='data-value'>
                {countryData.population.toLocaleString()}
              </span>
            </div>
            {/* country-population */}
          </div>
          {/* country-card__block */}
        </div>
        {/* country-card__block-container */}

        <div className='country-card__block country-card__data'>
          <h2 className='country-card__item country-official'>
            {countryData.name.official}
          </h2>
          {/* country-name */}

          <div className='country-card__item'>
            <span className='data-key'>Region </span>
            <span className='data-value'>{countryData.region}</span>
          </div>
          {/* country-region */}

          <div className='country-card__item'>
            <span className='data-key'>Subregion </span>
            <span className='data-value'>{countryData.subregion}</span>
          </div>
          {/* country-subregion */}

          <div className='country-card__item country-capital'>
            <span className='data-key'>Capital</span>
            <span className='data-value'>{countryData.capital}</span>
          </div>
          {/* country-capital */}

          <div className='country-card__item'>
            <span className='data-key'>Top-level domain </span>
            <span className='data-value'>
              {countryData.tld.map((td, idx) => (
                <span key={idx}>
                  ('{td}')
                  {countryData.tld.length > 1 &&
                  countryData.tld.length > idx + 1
                    ? ', '
                    : ''}
                </span>
              ))}
            </span>
          </div>
          {/* country-tld */}

          <div className='country-card__item'>
            <span className='data-key'>Timezones </span>
            <span className='data-value'>
              <ShowDataList dataList={countryData.timezones} />
            </span>
          </div>
          {/* country-timezone */}

          <div className='country-card__item'>
            <span className='data-key'>Continents </span>
            <span className='data-value'>
              {countryData.continents.map((continent, idx) => (
                <span key={idx}>
                  {continent}
                  {countryData.tld.length > 1 &&
                  countryData.tld.length > idx + 1
                    ? ', '
                    : ''}
                </span>
              ))}
            </span>
          </div>
          {/* country-continents */}

          <div className='country-card__item'>
            <span className='data-key'>Languages </span>
            <span className='data-value'>
              <ShowDataList dataList={getDataList(countryData.languages)} />
            </span>
          </div>
          {/* country-languages */}

          <div className='country-card__item'>
            <span className='data-key'>Currencies </span>
            <span className='data-value'>
              <ShowDataList dataList={getDataList(countryData.currencies)} />
            </span>
          </div>
          {/* country-currencies */}

          <div className='country-card__item'>
            <span className='data-key'>Road side </span>
            <span className='data-value'>
              {capitalizeFirstLetter(countryData.car.side)}
            </span>
          </div>
          {/* country-raadSide */}

          <div className='country-card__item'>
            <span className='data-key'>Start of week </span>
            <span className='data-value'>
              {capitalizeFirstLetter(countryData.startOfWeek)}
            </span>
          </div>
          {/* country-startOfWeek */}
        </div>
        {/* country-card__block */}
      </div>

      {/* country-card */}
    </>
  );
}

/*
      googleMaps data.maps.googleMaps,
      // boolean value
      independent: data.independent,
      landlocked: data.landlocked,
      // list value
      currencies getDataList(data.currencies),
      languages getDataList(data.languages),
*/
