import axios from 'axios';

const trafficstat = async () => {
  const begin = parseInt(Date.now().toString().slice(0, -3)) - 60 * 60 * 24;
  // const end = Math.round(new Date().getTime() / 1000);
  // const sum = 60 * 60 * 24;
  const end = begin + 60 * 60 * 2;

  // const add = 60 * 60 * 24 * 365 * 2 + 60 * 60 * 24 * 175 + 60 * 60 * 12;
  // const begin = 1517225200 + add;
  // const end=1517230800 + add;
  // console.log(begin, end)

  var date = new Date(begin * 1000);
  // const date = new Date(1517225200 * 1000);
  // console.log('date', date)
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = date.getFullYear() + ' ' + date.getMonth() + ' ' + date.getDate() + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);

const url = `https://USERNAME:PASSWORD@opensky-network.org/api/flights/all?begin=${begin}&end=${end}`
  // https://USERNAME:PASSWORD@opensky-network.org/api/flights/all?begin=1517227200&end=1517230800
  // const res = await axios.get(`https://USERNAME:PASSWORD@opensky-network.org/api/flights/all?begin=1517225200&end=1517230800`);
  // const res = await axios.get(`https://USERNAME:PASSWORD@opensky-network.org/api/flights/all?begin=1517225200&end=1517230800`);
  
  const res = await axios.get(url);

  const counts = {};
  const airports = []
  res.data.forEach(fly => {
    if (fly.estArrivalAirport !== null && fly.estDepartureAirport !== null) {
      return airports.push(fly.estArrivalAirport, fly.estDepartureAirport);
    }
  })
  // console.log(counts);
  
  airports.forEach(x => { counts[x] = (counts[x] || 0) + 1 });
  
  let traffic = {};
  Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(count => {
    const [icao, quantity] = count;
    // console.log(icao + ': ' + quantity);
    traffic[icao] = quantity;
  });
  
  return traffic;
}

export default trafficstat;