import {useContext} from "react";
import { LicenseContext } from "context";
import "./styles.scss";

const Error = () => {
  const { licenseData } = useContext(LicenseContext);
  const status = licenseData?.messages?.status;

  const errors: any = {
    '': 'A valid callsign is required',
    'NOT_FOUND': 'Callsign not found',
    'OTHER': 'Something went wrong. Please try again.',
  };

  const isError = status !== 'OK' || status !== undefined;

  return (
    <>
      {isError &&
        <p className='error'>{errors[licenseData?.messages?.status]}</p>
      }
    </>
  );
};

export default Error;
