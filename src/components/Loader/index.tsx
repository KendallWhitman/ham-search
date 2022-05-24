import { useContext } from 'react';
import { LicenseContext } from 'context';

const Loader = () => {
  const { licenseData } = useContext(LicenseContext);

  if (licenseData === 'loading') {
    return (
      <div className='loader'>
        <div className='loader__signal' />
        <div className='loader__antenna' />
      </div>
    );
  }

  return null;
};

export default Loader;
