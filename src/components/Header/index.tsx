import Search from 'components/Search';
import './styles.scss';

const Header = () => (
  <header className='header'>
    <span className='logo'>Callsign Lookup</span>
    <Search />
  </header>
);

export default Header;
