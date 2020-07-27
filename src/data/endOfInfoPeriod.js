const endOfInfoPeriod = () => {
  return parseInt(Date.now().toString().slice(0, -3)) - 60 * 60 * 24;
};

export default endOfInfoPeriod;