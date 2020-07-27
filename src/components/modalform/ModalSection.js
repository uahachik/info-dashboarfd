import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import endOfInfoPeriod from '../../data/endOfInfoPeriod';
import InfoSettings from '../layout/InfoSettings';
import InfoMonitor from '../layout/InfoMonitor';
import Loading from '../layout/Loading';

const ModalSection = ({ portCode }) => {
  const [arrivalPeriod, setArrivalPeriod] = useState(1);
  const [departurePeriod, setDeparturePeriod] = useState(1);
  const [arrivalFlights, setArrivalFlights] = useState([]);
  const [departureFlights, setDepartureFlights] = useState([]);
  const [noArrivalFlights, setNoArrivalFlights] = useState(false);
  const [noDepartureFlights, setNoDepartureFlights] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setArrivalFlights([]);
    setDepartureFlights([]);
    setNoArrivalFlights(false);
    setNoDepartureFlights(false);

    const end = endOfInfoPeriod();
    
    const arrivalUrl = `https://USERNAME:PASSWORD@opensky-network.org/api/flights/arrival?airport=${portCode}&begin=${end - 60 * 60 * arrivalPeriod}&end=${end}`;
    axios.get(arrivalUrl)
      .then(res => {
        setArrivalFlights(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setNoArrivalFlights(true);
          setLoading(false);
        } else {
          console.error(err.response);
        }
      });

    const departureUrl = `https://USERNAME:PASSWORD@opensky-network.org/api/flights/departure?airport=${portCode}&begin=${end - 60 * 60 * departurePeriod}&end=${end}`;
    axios.get(departureUrl)
      .then(res => {
        setDepartureFlights(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('errors', err.response);
        if (err.response.status === 404) {
          setNoDepartureFlights(true);
          setLoading(false);
        } else {
          console.error(err.response);
        }
      });
  }, [portCode, arrivalPeriod, departurePeriod]);

  return (
    <>
      {loading
        ? <Loading />
        : (
          <section>
            <h4
              className="my-2 text-center font-weight-bold"
              style={{color: '#223e5bf7'}}
            >
              Airport's Flights Information
            </h4>
      
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

            <div className="monitorContainer">
              <div className="row" style={{height: 326, marginRight: -5, marginLeft: -5}}>
                <InfoMonitor flights={arrivalFlights} noFlights={noArrivalFlights} action="arrive" />
                <InfoMonitor flights={departureFlights} noFlights={noDepartureFlights} action="depart" />
              </div>
            </div>
          </section>
        )
      }
    </>
  )
};

ModalSection.defaultProps = {
  portCode: '',
};

ModalSection.propTypes = {
  portCode: PropTypes.string,
};

export default ModalSection;
