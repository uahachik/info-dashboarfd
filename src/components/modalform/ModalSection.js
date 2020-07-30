import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import useAsyncError from '../../hooks/useAsyncError';
import createAirportUrl from '../../data/createAirportUrl';

import InfoSettings from '../layout/InfoSettings';
import InfoMonitor from '../layout/InfoMonitor';
import Loading from '../layout/Loading';

const ModalSection = ({ portCode }) => {
  const throwError = useAsyncError();
  const [arrivalPeriod, setArrivalPeriod] = useState(1);
  const [departurePeriod, setDeparturePeriod] = useState(1);
  const [arrivalFlights, setArrivalFlights] = useState([]);
  const [departureFlights, setDepartureFlights] = useState([]);
  const [noArrivalFlights, setNoArrivalFlights] = useState(false);
  const [noDepartureFlights, setNoDepartureFlights] = useState(false);
  const [loading, setLoading] = useState(true);

  const arrivalUrl = createAirportUrl('arrival', portCode, arrivalPeriod);
  const departureUrl = createAirportUrl('departure', portCode, departurePeriod);

  useEffect(() => {
    setArrivalFlights([]);
    setDepartureFlights([]);
    setNoArrivalFlights(false);
    setNoDepartureFlights(false);

    axios.get(arrivalUrl)
      .then(res => {
        setArrivalFlights(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setNoArrivalFlights(true);
          setLoading(false);
        } else if (err.response.status === 500) {
          console.error(err.response.data);
          setTimeout(() => {
            // fire ErrorBoundary
            throwError();
          }, 3000);
        } else {
          console.error(err);
        }
      });

    axios.get(departureUrl)
      .then(res => {
        setDepartureFlights(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (err.response.status === 404) {
          setNoDepartureFlights(true);
          setLoading(false);
        } else if (err.response.status === 500) {
          console.error(err.response.data);
          setTimeout(() => {
            // fire ErrorBoundary
            throwError();
          }, 3000);
        } else {
          console.error(err);
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
              className={
                window.innerWidth > 576 
                  ? 'my-2 text-center font-weight-bold' 
                  : 'my-2 text-center h5 font-weight-bold'
              }
              style={{color: '#223e5bf7'}}
            >
              Airport's Flights Information
            </h4>
      
            <div
              className="d-flex justify-content-around"
              style={window.innerWidth > 768 ? null : {flexFlow: 'column', alignItems: 'center'}}
            >
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
              <div className="row" style={{height: 329, margin: '0 -6px'}}>
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
