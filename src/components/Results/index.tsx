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
        <ul className={`results ${isRecent ? 'results--recent' : ''}`}>
          {(name || callsign) &&
            <li className='results__header'>
              <div>
                {name &&
                  <p className='results__title'>{name}</p>
                }
                {callsign &&
                  <p className='results__subtitle'>{callsign}</p>
                }
              </div>
              <img
                src={flagUrl}
                alt="Country Flag"
                className='results__image'
              />
            </li>
          }
          {cls &&
            <li className='results__item'>
              <span className='results__label'>Class:</span>
              <span>{cls}</span>
            </li>
          }
          {licenseStatus &&
            <li className='results__item'>
              <span className='results__label'>Status:</span> 
              <span>{licenseStatus}</span>
            </li>
          }
          {expires &&
            <li className='results__item'>
              <span className='results__label'>Expiration:</span>
              <span>{expires}</span>
            </li>
          }
          {grid &&
            <li className='results__item'>
              <span className='results__label'>Grid:</span>
              <span>{grid}</span>
            </li>
          }
          {lat &&
            <li className='results__item'>
              <span className='results__label'>Lat:</span>
              <span>{lat}</span>
            </li>
          }
          {lon &&
            <li className='results__item'>
              <span className='results__label'>Lon:</span>
              <span>{lon}</span>
            </li>
          }
          {address &&
            <li className="results__item">
              <span className='results__label'>Address:</span>
              <div>
                <address className='results__address'>
                  {address}<br/>
                  {address2}<br/>
                  {country}
                </address>
              </div>
            </li>
          }
        </ul>
      }
    </>
  );
};

export default Results;
