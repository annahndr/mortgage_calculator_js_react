import React from 'react';

class IncomeDepositForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      income1: null,
      income2: null,
      deposit: null
    };
this.handleIncome1Change = this.handleIncome1Change.bind(this);
this.handleIncome2Change = this.handleIncome2Change.bind(this);
this.handleDepositChange = this.handleDepositChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleIncome1Change(event){
    this.setState({income1 : event.target.value});
  }

  handleIncome2Change(event){
    this.setState({income2 : event.target.value});
  }

  handleDepositChange(event){
    this.setState({deposit : event.target.value});
  }

    handleSubmit(event){
      event.preventDefault(); //it won't refresh page straight away, form will hold data
      const income1 = parseInt(this.state.income1);
      const income2 = parseInt(this.state.income2);
      const deposit = parseInt(this.state.deposit);
      if(!income1 || !income2 || !deposit) return null;

      //sending value of income 1/2 and deposit to mortgage container
      this.props.calculateMaxMortgage(income1, income2, deposit);

      this.setState({income1: null, income2: null, deposit: null});
    }




  render(){
    return(
      <form className="income-deposit-form" onSubmit={this.handleSubmit}>

        Person 1 income:<input  type="number"
                value={this.state.income1}
                onChange={this.handleIncome1Change}/>

        Person 2 income:<input  type="number"
                placeholder="put 0 if not applicable"
                value={this.state.income2}
                onChange={this.handleIncome2Change}/>

        Deposit:<input  type="number"
                placeholder="put 0 if not applicable"
                value={this.state.deposit}
                onChange={this.handleDepositChange}/>

        <input type="submit" value="post"></input>

      </form>
    )
  }


////
}

export default IncomeDepositForm;
