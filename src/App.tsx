import Header from 'components/Header';
import Results from 'components/Results';
import Error from 'components/Error';
import LicenseProvider from 'context';
import 'styles/index.scss';
import Loader from 'components/Loader';
import Footer from 'components/Footer';

const App = () => (
  <LicenseProvider>
    <Header />
    <main>
      <Loader />
      <Results />
      <Error />
    </main>
    <Footer />
  </LicenseProvider>
);

export default App;
