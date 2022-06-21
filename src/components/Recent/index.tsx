import { useContext } from "react";
import { LicenseContext } from "context";
import getLicense from '../Search/getLicense';

const Recent = () => {
  const { setLicenseData } = useContext(LicenseContext);
  let recent = JSON.parse(localStorage.getItem('recent') || '[]');

  const handleSubmit = async (e: any, value: string) => {
    e.preventDefault();
    await setLicenseData('loading');

    const data = await getLicense(value);
    await setLicenseData({...data, value: value});
  };

  return (
    <>
      {recent.length > 0 &&
        <div className='recent'>
          <h2 className='recent__title'>Recent Searches</h2>
            <ul className='recent__list'>
              {recent?.map((item: string, i: number) => (
              <li key={i} className='recent__item'>
                <a
                  href="/"
                  onClick={(e) => handleSubmit(e, item)}
                  className='recent__link'
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default Recent;
