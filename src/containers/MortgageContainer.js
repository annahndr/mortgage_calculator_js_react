import React from 'react';
import IncomeDepositForm from '../components/IncomeDepositForm';
import MaxMortgageDisplay from '../components/MaxMortgageDisplay';

class MortgageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      maxMortgage : null,
    };
    this.calculateMaxMortgage = this.calculateMaxMortgage.bind(this);
  }


  calculateMaxMortgage(income1, income2, deposit){
      const maxMortgage = income1 + income2 + deposit;
      this.setState({maxMortgage : maxMortgage})
    }


  render() {
    return (
      <div className="mortgage-container">
      <h2>What Mortgage Can You Afford?</h2>

      <IncomeDepositForm calculateMaxMortgage = {this.calculateMaxMortgage}/>

      <MaxMortgageDisplay maxMortgageValue = {this.state.maxMortgage} />


      </div>
    )
  }


/////////
}

export default MortgageContainer;
