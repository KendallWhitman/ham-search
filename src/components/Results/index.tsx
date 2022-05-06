import { useContext } from "react";
import { LicenseContext } from "context";
import { licenseClasses, licenseStatus } from "utils/licenseCodes";
import Callsign from "./types";

const Results = () => {
  const { licenseData } = useContext(LicenseContext);

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

  const hasCallsign = call !== undefined && call !== 'NOT_FOUND';

  return (
    <>
      {hasCallsign &&
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
