import { useContext, useState } from 'react';
import { LicenseContext } from 'context';
import getLicense from './getLicense';

const Search = () => {
  const { licenseData, setLicenseData } = useContext(LicenseContext);
  const [localValue, setLocalValue] = useState('');
  const recent = JSON.parse(localStorage.getItem('recent') || '[]');

  const handleChange = (value: string) => {
    setLocalValue(value);
    setLicenseData({...licenseData, value: value});
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setLicenseData('loading');

    const data = await getLicense(localValue);
    await setLicenseData({...data, value: localValue });

    if (!recent.includes(licenseData.value) && (/[a-z,A-Z,0-9]/).test(licenseData.value)) {
      localStorage.setItem('recent', JSON.stringify([licenseData.value, ...recent].slice(0, 5)));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='search'>
        <input
          className='search__input'
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by callsign"
          type='text'
          value={licenseData.value || localValue}
        />
        <button className='search__button'>Search</button>
      </form>
    </>
  );
};

export default Search;
