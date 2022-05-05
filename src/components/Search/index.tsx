import { useContext, useState } from 'react';
import { LicenseContext } from 'context';
import getLicense from './getLicense';
import "./styles.scss";

const Search = () => {
  const { licenseData, setLicenseData } = useContext(LicenseContext);
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    setValue(value)
    setLicenseData({})
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await setLicenseData({});

    try {
      const data = await getLicense(value);
      await setLicenseData(data);
    } catch (err: any) {
      if (value === '') {
        setLicenseData({...licenseData, messages: { status: '' } })
      } else {
        setLicenseData({...licenseData, messages: { status: 'OTHER' } })
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='search'>
        <input
          className='search__input'
          onChange={(e) => handleChange(e.target.value.toUpperCase())}
          placeholder="Callsign"
          type='text'
          value={value}
        />
        <button className='search__button'>Search</button>
      </form>
    </>
  );
};

export default Search;
