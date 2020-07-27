import React from 'react';
import PropTypes from 'prop-types';
import './InfoMonitor.css';
import Moment from 'react-moment';

const InfoMonitor = ({ flights, noFlights, action }) => {
  return (
    <div className="col px-1 monitor">
      <div className="container">

        <div className="row monitorHeader">
          <div className="col-2 h-25" style={{paddingLeft: 0}}>
            CALLSIGN
          </div>
          <div className="col-3 h-25" style={{borderRight: '1px solid #f5f5f57d', borderLeft: '1px solid #f5f5f57d'}}>
            Arriving Time
          </div>
          <div className="col-2 h-25 px-1" style={{borderRight: '1px solid #f5f5f57d'}}>
            {action === 'arrive' ? 'Departure Airport' : 'Arrival Airport'}
          </div>
          <div className="col-2 h-25 px-1" style={{borderRight: '1px solid #f5f5f57d'}}>
            {action === 'arrive' ? 'Distance to AA' : 'Distance to DA'}
          </div>
          <div className="col-3 h-25">
            Departure Time
          </div>
        </div>

        {!noFlights ? 
          flights.reverse().map(flight => {
            const {callsign, estArrivalAirport, estDepartureAirport,
              estArrivalAirportHorizDistance, estArrivalAirportVertDistance, 
                estDepartureAirportHorizDistance, estDepartureAirportVertDistance,
                  firstSeen, lastSeen} = flight;

            function calcShortDistance (a, b) {
              return (Math.floor(Math.sqrt((a * a) + (b * b))));
            }
            const distanceToArrivalAirport = calcShortDistance(estArrivalAirportHorizDistance, estArrivalAirportVertDistance);
            const distanceToDepartureAirport = calcShortDistance(estDepartureAirportHorizDistance, estDepartureAirportVertDistance);
              
            return (
              <div key={callsign} className="row">
                <div className="col-2 h-25" style={{paddingLeft: '0.12rem', borderRight: '1px solid #f5f5f57d'}}>
                  {callsign}
                </div>
                <div className="col-3 h-25" style={{borderRight: '1px solid #f5f5f57d'}}>
                  <Moment format="MM/DD HH:mm" unix>{firstSeen}</Moment>
                </div>
                <div className="col-2 h-25" style={{borderRight: '1px solid #f5f5f57d'}}>
                  {action === 'arrive' ? estDepartureAirport || 'NDA' : estArrivalAirport || 'NDA'}
                </div>
                <div className="col-2 h-25" style={{borderRight: '1px solid #f5f5f57d'}}>
                  {action === 'arrive' ? distanceToArrivalAirport : distanceToDepartureAirport}
                </div>
                <div className="col-3 h-25">
                  <Moment format="MM/DD HH:mm" unix>{lastSeen}</Moment>
                </div>
              </div>
            )
          }) : (
            <h4 style={{marginTop: 120, textAlign: 'center'}}>No Flights</h4>
          )
        }
      </div>
    </div>
  );
};
InfoMonitor.propTypes = {
  flights: PropTypes.array.isRequired,
  noFlights: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
};

export default InfoMonitor;
