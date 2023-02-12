import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import Header from './components/Header';
import Search from './components/Search';
import CountryCard from './components/CountryCard';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [countryData, setCountryData] = useState();

  // when page loads
  // load fonts from 'WebFont'
  // getItem from local storage and sets theme
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito', 'Inter'],
      },
    });

    changeTheme(theme ? theme : 'theme-light');
  }, []);

  // set theme in local storage & html to 'themeName'
  const changeTheme = (themeName) => {
    setTheme(themeName);
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  };

  // function to toggle between light and dark theme
  const toggleTheme = () => {
    if (theme === 'theme-dark') {
      changeTheme('theme-light');
    } else {
      changeTheme('theme-dark');
    }
  };

  // search country
  const searchCountry = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((response) => response.json())
      .then((data) => setCountryData(data[0]))
      .catch((err) => setCountryData(null));
  };

  return (
    <>
      <div className='container'>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Search searchCountry={searchCountry} />
        {countryData ? <CountryCard countryData={countryData} /> : ''}
      </div>
    </>
  );
}
