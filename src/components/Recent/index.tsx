import { useContext, useEffect, useState } from "react";
import { LicenseContext } from "context";
import RecentItem from "./RecentItem";

const Recent = () => {
  const { licenseData } = useContext(LicenseContext);
  const [recent, setRecent] = useState(
    JSON.parse(localStorage.getItem('recent') || '[]')
  );

  useEffect(() => {
    setRecent(JSON.parse(localStorage.getItem('recent') || '[]'));
  }, [licenseData]);

  const clearRecent = () => {
    localStorage.setItem('recent', '[]');
    setRecent([]);
  }

  return (
    <>
      {recent.length > 0 &&
        <div className='recent'>
          <div className='recent__header'>
            <h2 className='recent__title'>Recent Searches</h2>
            <span className='recent__link' onClick={clearRecent}>Clear</span>
          </div>
          <ul className='recent__list'>
            {recent?.map((item: any, i: number) => (
              <RecentItem item={item} key={i} />
            ))}
          </ul>
        </div>
      }
    </>
  );
};

export default Recent;
