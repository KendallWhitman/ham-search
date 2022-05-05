import Header from 'components/Header';
import Results from 'components/Results';
import Error from 'components/Error';
import LicenseProvider from 'context';
import 'styles/index.scss';

const App = () => (
  <LicenseProvider>
    <Header />
    <main>
      <Results />
      <Error />
    </main>
  </LicenseProvider>
);

export default App;
