import { useContext } from 'react';
import { LicenseContext } from 'context';
import getLicense from './getLicense';

const Search = () => {
  const { licenseData, setLicenseData } = useContext(LicenseContext);
  const recent = JSON.parse(localStorage.getItem('recent') || '[]');

  const handleChange = (value: string) => setLicenseData({...licenseData, value: value});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setLicenseData('loading');

    const data = await getLicense(licenseData.value);
    await setLicenseData({...data, value: licenseData.value });

    localStorage.setItem('recent', JSON.stringify([licenseData.value, ...recent].slice(0, 5)));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='search'>
        <input
          className='search__input'
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by callsign"
          type='text'
          value={licenseData.value || ""}
        />
        <button className='search__button'>Search</button>
      </form>
    </>
  );
};

export default Search;
