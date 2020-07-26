import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Moment from 'react-moment';
// import 'moment-timezone';

import InfoSettings from '../layout/InfoSettings';

const ModalSecton = ({portCode}) => {
  const [arrivalPeriod, setArrivalPeriod] = useState(1);
  const [departurePeriod, setDeparturePeriod] = useState(1);
  const [arrivalFlights, setArrivalFlights] = useState([]);
  const [departureFlights, setDepartureFlights] = useState([]);
  const [noArrivalFlights, setNoArrivalFlights] = useState(false);
  const [noDepartureFlights, setNoDepartureFlights] = useState(false);
  // console.log('noArrivalFlights', noArrivalFlights);
  // console.log('noDepartureFlights', noDepartureFlights);
  console.log(arrivalFlights)
  console.log(departureFlights)
  
  useEffect(() => {
    const end = parseInt(Date.now().toString().slice(0, -3)) - 60 * 60 * 24;
    const arrivalUrl = `https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=${portCode}&begin=${end - 60 * 60 * arrivalPeriod}&end=${end}`;
    
    axios.get(arrivalUrl)
      .then(res => {
        setArrivalFlights(res.data);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setNoArrivalFlights(true);
        } else {
          console.error(err.response);
        }
      });

      const departureUrl = `https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=${portCode}&begin=${end - 60 * 60 * departurePeriod}&end=${end}`;
    
      axios.get(departureUrl)
        .then(res => {
          setDepartureFlights(res.data);
        })
        .catch(err => {
          console.error('errors', err.response);
          if (err.response.status === 404) {
            setNoDepartureFlights(true);
          } else {
            console.error(err.response);
          }
        });
  }, [portCode, arrivalPeriod, departurePeriod]);

  return (
    <>
      {!arrivalFlights.length && !departureFlights.length && !noArrivalFlights && !noDepartureFlights
        ? <div style={loadingStyle} />
        : (
          <section className="section">
            <h4 className="my-2 text-center text-dark">Airport's Flights Information</h4>
      
            <div className="d-flex justify-content-around">
              <InfoSettings
                settings={{
                  action: 'arrive',
                  borts: arrivalFlights.length,
                  noFlights: noArrivalFlights,
                  setTiming: {setArrivalPeriod},
                }}
              />
              
              <InfoSettings
                settings={{
                  action: 'depart',
                  borts: departureFlights.length,
                  noFlights: noDepartureFlights,
                  setTiming: {setDeparturePeriod}
                }}
              />
            </div>
          </section>
        )
      }
    </>
  )
};

const loadingStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  width: '100%',
  height: 424,
  background: '#4297ec url("data:image/jpeg;base64,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") no-repeat center center',
}

ModalSecton.defaultProps = {
  portCode: '',
};

ModalSecton.propTypes = {
  portCode: PropTypes.string,
};

export default ModalSecton;
