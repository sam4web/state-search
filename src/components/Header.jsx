import { FaGlobeAsia } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function Header({ toggleTheme, currentTheme }) {
  return (
    <>
      <header className='header'>
        <div className='logo' onClick={() => window.location.reload()}>
          <FaGlobeAsia className='logo__icon' />
          <p className='logo__text'>StateSearch</p>
        </div>
        {/* logo */}

        <div className='theme-toggler' onClick={toggleTheme}>
          {currentTheme === 'theme-dark' ? <BsMoon /> : <BsSun />}
        </div>
        {/* theme-toggler */}
      </header>
      {/* header */}
    </>
  );
}
