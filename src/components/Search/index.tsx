import { useContext, useState } from 'react';
import { LicenseContext } from 'context';
import getLicense from 'utils/getLicense';

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

    const recentIndex = recent.map((v: any) => v.callsign).indexOf(localValue.toUpperCase());
    const isRecent = recentIndex > -1;

    if (isRecent) {
      setLicenseData(recent[recentIndex]);
      return;
    }

    const data = await getLicense(localValue);
    await setLicenseData({...data, value: localValue });

    const isValid =
      data.status !== 'EMPTY' &&
      data.status !== 'NOT_FOUND' &&
      data.status !== 'ERROR';

    if (!isRecent && isValid) {
      localStorage.setItem('recent', JSON.stringify([data, ...recent].slice(0, 10)));
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
