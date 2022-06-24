import { useContext } from "react";
import { LicenseContext } from "context";

const Error = () => {
  const { licenseData } = useContext(LicenseContext);

  const errors: any = {
    'EMPTY': 'A valid callsign is required',
    'NOT_FOUND': 'Callsign not found',
    'OTHER': 'Something went wrong. Please try again.',
  };

  const error = errors[licenseData?.status] || null;

  return (
    <>
      {error &&
        <p className='error'>{error}</p>
      }
    </>
  );
};

export default Error;
