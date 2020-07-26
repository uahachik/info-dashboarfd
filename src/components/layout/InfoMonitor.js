import React from 'react';
import PropTypes from 'prop-types';
import './InfoMonitor.css';

const InfoMonitor = ({ flights, noFlights, action }) => {
  // console.log(flights);
  
  return (
    <div className="col px-1 monitor" style={{border: '1px solid whitesmoke', fontSize: 12}}>
      <div className="container">
        {!noFlights ? 
          flights.map(flight => {
            const {callsign, estArrivalAirport, estDepartureAirport,
              estArrivalAirportHorizDistance, estDepartureAirportHorizDistance,
                firstSeen, lastSeen} = flight;
              
            return (
              <div key={callsign} className="row">
                <div className="col-2 h-25 pl-1" style={{borderRight: '1px solid #f5f5f57d'}}>
                  {callsign}
                </div>
                <div className="col-3 h-25" style={{borderRight: '1px solid #f5f5f57d'}}>
                  {firstSeen}
                </div>
                <div className="col-2 h-25" style={{borderRight: '1px solid #f5f5f57d'}}>
                  {action === 'arrive' ? estDepartureAirport || 'NDA' : estArrivalAirport || 'NDA'}
                </div>
                <div className="col-2 h-25" style={{borderRight: '1px solid #f5f5f57d'}}>
                  {estArrivalAirportHorizDistance + estDepartureAirportHorizDistance}
                </div>
                <div className="col-3 h-25 pl-2">
                  {lastSeen}
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
