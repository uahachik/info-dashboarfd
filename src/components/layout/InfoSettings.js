import React,{ useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './InfoSettings.css';

import useAnimation from '../../hooks/useAnimation';

const timeConverter = stringValue => {
  let intValue;
  switch (stringValue) {
    case 'two':
      intValue = 2;
      break;
    case 'three':
      intValue = 3;
      break;
    case 'four':
      intValue = 4;
      break;
    default:
      intValue = 1;
  }
  
  return intValue;
}

const InfoSettings = ({ settings: { action, borts, noFlights, setTiming } }) => {
  const { transition } = useAnimation();
  const [show, setShow] = useState(false);
  const fligthsPeriod = useRef('one');
  let {current: period} = fligthsPeriod;

  const getPeriod = e => {
    const timeValue = e.currentTarget.textContent;
    fligthsPeriod.current = timeValue;
    setShow(false);
    if (action === 'arrive') {
      setTiming.setArrivalPeriod(timeConverter(timeValue));
      timeConverter(timeValue)
    } else if (action === 'depart') {
      setTiming.setDeparturePeriod(timeConverter(timeValue));
    }
  };

  const infoStyle = {color: '#1e90ffcc', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '700'};
  return (
    <div className={window.innerWidth > 576 ? 'h5 text-dark' : 'h6 mb-0 text-dark'}>
      <div className="d-flex align-items-center">
        <span style={{...infoStyle, paddingRight: 5}}>
          {borts === 0 ? '' : borts}{noFlights && 'NO'}
        </span>
        <span style={{color: '#01143c'}}>
          bort{borts !== 1 && 's'} {action}{borts === 1 && 's'} for the last
        </span>

        <div>
          <div className="container position-relative px-0">
            <button
              className="btn dropdown-toggle py-0 px-1"
              onClick={() => setShow(prevState => !prevState)}
            >
              <span style={infoStyle}>{period}</span>
            </button>
            
            {show && (
              <div className="dropdown" style={transition}>
                {period !== 'one' && <button className="dropdown-item item bg-light" onClick={getPeriod}>one</button>}
                {period !== 'two' && <button className="dropdown-item item bg-light" onClick={getPeriod}>two</button>}
                {period !== 'three' && <button className="dropdown-item item bg-light" onClick={getPeriod}>three</button>}
                {period !== 'four' && <button className="dropdown-item item bg-light" onClick={getPeriod}>four</button>}
              </div>
            )}
          </div>
        </div>

        <span style={{color: '#01143c'}}>hour{period !== 'one' && 's'}</span>
      </div>
    </div>
  );
};

InfoSettings.defaultProps = {
  action: '',
  borts: 0,
  noFlights: false,
  setTiming: () => {},
};

InfoSettings.propTypes = {
  action: PropTypes.string.isRequired,
  borts: PropTypes.number.isRequired,
  noFlights: PropTypes.bool.isRequired,
  setTiming: PropTypes.func.isRequired,
};

export default InfoSettings;
