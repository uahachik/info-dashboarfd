import endOfInfoPeriod from './endOfInfoPeriod';

const createAirportUrl = (action, code, period) => {
  const urlEnv = process.env.REACT_APP_AIRPORT_URL;
  const end = endOfInfoPeriod();
  
  const url = `${urlEnv}${action}?airport=${code}&begin=${end - 60 * 60 * period}&end=${end}`;

  return url;
}

export default createAirportUrl;