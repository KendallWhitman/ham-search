import { useContext } from "react";
import { LicenseContext } from "context";

const Error = () => {
  const { licenseData: { status } } = useContext(LicenseContext);

  const errors: any = {
    'EMPTY': 'A valid callsign is required',
    'INVALID': 'Callsign not found',
    'OTHER': 'Something went wrong. Please try again.',
  };

  const error = errors[status];

  return (
    <>
      {error &&
        <p className='error'>{error}</p>
      }
    </>
  );
};

export default Error;
