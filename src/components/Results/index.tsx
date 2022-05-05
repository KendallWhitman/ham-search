import { useContext } from "react";
import { LicenseContext } from "context";
import { licenseClasses, licenseStatus } from "utils/licenseCodes";
import './styles.scss';
import {type} from "os";

const Results = () => {
  const { licenseData } = useContext(LicenseContext);

  interface Callsign {
    addr1: string,
    addr2: string,
    call: string,
    class: string,
    country: string,
    expires: string,
    fname: string,
    name: string,
    state: string,
    status: string,
    zip: string,
  };

  const {
    addr1,
    addr2,
    call,
    class: cls,
    country,
    expires,
    fname,
    name,
    state,
    status,
    zip,
  }: Callsign = licenseData?.callsign || {};

  return (
    <>
      {call !== 'NOT_FOUND' &&
        <div className='results'>
          {name &&
            <p className='results__item'>
              <span className='results__label'>Name:</span> {`${fname} ${name}`}
            </p>
          }

          {call &&
            <p className='results__item'>
              <span className='results__label'>Callsign:</span> {call}
            </p>
          }

          {cls &&
            <p className='results__item'>
              <span className='results__label'>Class:</span> {licenseClasses[cls]}
            </p>
          }

          {status &&
            <p className='results__item'>
              <span className='results__label'>Status:</span> {licenseStatus[status]}
            </p>
          }

          {expires &&
            <p className='results__item'>
              <span className='results__label'>Expiration Date:</span> {expires}
            </p>
          }

          {addr1 &&
            <div className="results__item">
              <span className='results__label'>Address:</span>
              <address className='results__address'>
                {addr1}<br/>
                {`${addr2 && `${addr2},`} ${state && `${state}.`} ${zip}`}<br/>
                {country}
              </address>
            </div>
          }
        </div>
      }
    </>
  );
};

export default Results;
