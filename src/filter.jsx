// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function FilterButtons({ setTimeframe }) {
  return (
    <div className="filter-buttons">
      <nav>
        <button onClick={() => setTimeframe('12 months')}>12 months</button>
        <button onClick={() => setTimeframe('6 months')}>6 months</button>
        <button onClick={() => setTimeframe('1 month')}>1 month</button>
        <button onClick={() => setTimeframe('7 days')}>7 days</button>
        <button onClick={() => setTimeframe('24 hours')}>24 hours</button>
      </nav>
    </div>
  );
}

// Add prop-types validation
FilterButtons.propTypes = {
  setTimeframe: PropTypes.func.isRequired, // Specify that setTimeframe is a required function
};

export default FilterButtons;
