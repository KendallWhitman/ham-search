import { createContext, useState } from 'react';

export const LicenseContext = createContext<any>({});

const LicenseProvider = ({ children }: any) => {
  const [licenseData, setLicenseData] = useState({
    value: ""
  });

  return (
    <LicenseContext.Provider value={{ licenseData, setLicenseData }}>
      {children}
    </LicenseContext.Provider>
  );
};

export default LicenseProvider;
