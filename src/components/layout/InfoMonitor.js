import React from 'react';
import PropTypes from 'prop-types';
import './InfoMonitor.css';
import Moment from 'react-moment';

const InfoMonitor = ({ flights, noFlights, action }) => {
  return (
    <div className="col px-1 monitor" style={{border: '1px solid whitesmoke', fontSize: 12}}>
      <div className="container">
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
