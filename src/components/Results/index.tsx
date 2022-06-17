import { useContext } from "react";
import { LicenseContext } from "context";
import ResultTypes from "./types";

const Results = () => {
  const { licenseData } = useContext(LicenseContext);

  const {
    address,
    current,
    name,
    otherInfo,
    status,
  }: ResultTypes = licenseData || {};

  const { line1, line2 } = address || {};
  const { callsign, operClass } = current || {};
  const { expiryDate } = otherInfo || {};

  return (
    <>
      {name &&
        <div className='results'>
          {name &&
            <p className='results__item'>
              <span className='results__label'>Name:</span> {name}
            </p>
          }

          {callsign &&
            <p className='results__item'>
              <span className='results__label'>Callsign:</span> {callsign}
            </p>
          }

          {operClass &&
            <p className='results__item'>
              <span className='results__label'>Class:</span> {operClass}
            </p>
          }

          {status &&
            <p className='results__item'>
              <span className='results__label'>Status:</span> {status}
            </p>
          }

          {expiryDate &&
            <p className='results__item'>
              <span className='results__label'>Expiration Date:</span> {expiryDate}
            </p>
          }

          {line1 &&
            <div className="results__item">
              <span className='results__label'>Address:</span>
              <address className='results__address'>
                {line1}<br/>
                {`${line2 && `${line2}`}`}<br/>
              </address>
            </div>
          }
        </div>
      }
    </>
  );
};

export default Results;
