import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

export default function Search() {
  const [countryName, setCountryName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(countryName);
    setCountryName('');
  };

  return (
    <>
      <form
        className='search'
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type='text'
          className='search__box'
          name='country'
          placeholder='Enter country name...'
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button type='submit' className='search__icon'>
          <BsSearch />
        </button>
      </form>
    </>
  );
}
