import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import Header from './components/Header';
import Search from './components/Search';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

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

  return (
    <>
      <div className='container'>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Search />
      </div>
    </>
  );
}
