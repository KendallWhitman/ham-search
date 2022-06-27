import Results from "components/Results";
import { useState } from "react"

const RecentItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <li className='recent__item'>
      <div className='recent__wrapper' onClick={toggleDropdown}>
        <span className='recent__link'>{item.callsign}</span>
        <span className={`recent__icon ${isOpen ? 'recent__icon--open' : ''}`} />
      </div>
      <div className={`recent__container ${isOpen ? 'recent__container--open' : ''}`}>
        <Results isRecent recentEntry={item} />
      </div>
    </li>
  );
}

export default RecentItem;
