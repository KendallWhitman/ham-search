import { useContext, useState } from 'react';
import { LicenseContext } from 'context';
import getLicense from './getLicense';

const Search = () => {
  const { setLicenseData } = useContext(LicenseContext);
  const [value, setValue] = useState('');

  const handleChange = (value: string) => setValue(value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setLicenseData('loading');

    const data = await getLicense(value);
    await setLicenseData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='search'>
        <input
          className='search__input'
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by callsign"
          type='text'
          value={value}
        />
        <button className='search__button'>Search</button>
      </form>
    </>
  );
};

export default Search;
