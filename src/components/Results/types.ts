interface ResultTypes {
  address: {
    line1: string,
    line2: string
  },
  current: {
    callsign: string,
    operClass: string,
  },
  location: {
    gridsquare: string,
    latitude: string,
    longitude: string,
  }
  name: string,
  otherInfo: {
    expiryDate: string,
  },
  status: string,
};

export default ResultTypes;
