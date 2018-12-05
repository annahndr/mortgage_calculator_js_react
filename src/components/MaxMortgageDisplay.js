import React from 'react';

const MaxMortgageDisplay = ({maxMortgageValue}) => {

  if(!maxMortgageValue) {
    return null;
  }

    return (
      <div className="max-mortgage-display">
        {maxMortgageValue}
      </div>
    )

}

export default MaxMortgageDisplay;
