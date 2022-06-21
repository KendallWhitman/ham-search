import Header from 'components/Header';
import Results from 'components/Results';
import Error from 'components/Error';
import LicenseProvider from 'context';
import Loader from 'components/Loader';
import Recent from 'components/Recent';
import Footer from 'components/Footer';
import 'styles/index.scss';

const App = () => (
  <LicenseProvider>
    <Header />
    <main>
      <Loader />
      <Results />
      <Error />
      <Recent />
    </main>
    <Footer />
  </LicenseProvider>
);

export default App;
