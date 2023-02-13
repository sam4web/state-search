import { FaGlobeAsia } from 'react-icons/fa';
import { BsSun, BsMoonFill } from 'react-icons/bs';

import { AiOutlineGithub } from 'react-icons/ai';

export default function Header({ toggleTheme, currentTheme }) {
  return (
    <>
      <header className='header'>
        <div className='logo' onClick={() => window.location.reload()}>
          <FaGlobeAsia className='logo__icon' />
          <p className='logo__text'>StateSearch</p>
        </div>
        {/* logo */}

        <nav className='nav-items'>
          <a
            href='https://github.com/sam4web/state-search'
            target='_blank'
            className='link'
          >
            <span className='link__text'>Source Code</span>
            <AiOutlineGithub className='link__icon' id='github-icon' />
          </a>

          <div className='theme-toggler' onClick={toggleTheme}>
            {currentTheme === 'theme-dark' ? <BsMoonFill /> : <BsSun />}
          </div>
          {/* theme-toggler */}
        </nav>
        {/* nav-items */}
      </header>
      {/* header */}
    </>
  );
}
