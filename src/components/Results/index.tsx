import { useContext } from "react";
import { LicenseContext } from "context";
import ResultTypes from "./types";

const Results = ({ isRecent, recentEntry }: { isRecent?: boolean, recentEntry?: any }) => {
  const { licenseData } = useContext(LicenseContext);

  const {
  address,
  address2,
  callsign,
  cls,
  country,
  expires,
  grid,
  lat,
  licenseStatus,
  lon,
  name,
  status,
  }: ResultTypes = isRecent ? recentEntry : licenseData || {};

  const flagUrl = `https://countryflagsapi.com/svg/${country}`;

  return (
    <>
      {status === 'OK' &&
      <div className={`results ${isRecent ? 'results--recent' : ''}`}>
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
          {cls &&
            <p className='results__item'>
              <span className='results__label'>Class:</span> {cls}
            </p>
          }
          {licenseStatus &&
            <p className='results__item'>
              <span className='results__label'>Status:</span> {licenseStatus}
            </p>
          }
          {expires &&
            <p className='results__item'>
              <span className='results__label'>Expiration Date:</span> {expires}
            </p>
          }
          {grid &&
            <p className='results__item'>
              <span className='results__label'>Grid:</span> {grid}
            </p>
          }
          {lat &&
            <p className='results__item'>
              <span className='results__label'>Lat:</span> {lat}
            </p>
          }
          {lon &&
            <p className='results__item'>
              <span className='results__label'>Lon:</span> {lon}
            </p>
          }
          {address &&
            <div className="results__item">
              <span className='results__label'>Address:</span>
              <div>
                <address className='results__address'>
                  {address}<br/>
                  {address2}<br/>
                  {country}
                </address>
                <img
                  src={flagUrl}
                  alt="Country Flag"
                  className='results__image'
                />
              </div>
            </div>
          }
        </div>
      }
    </>
  );
};

export default Results;
