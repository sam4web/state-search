import { useEffect } from 'react';
import WebFont from 'webfontloader';

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito'],
      },
    });
  }, []);

  return (
    <>
      <div className='container'>
        <h1>State Search</h1>
      </div>
    </>
  );
}
