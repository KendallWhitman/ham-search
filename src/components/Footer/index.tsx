const Footer = () => {
  const poweredBy = {
    name: 'HamDB.org',
    link: 'https://hamdb.org/',
  };

  return (
    <footer className='footer'>
      <p className='footer__text'>
        Powered by <a href={poweredBy.link} className='footer__link'>{poweredBy.name}</a>
      </p>
    </footer>
  )
}

export default Footer
