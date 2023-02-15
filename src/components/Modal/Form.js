import React, {useState} from 'react';
export const Form = ({ onSubmit }) => {

    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    
    const formSubmit = event => {
        setAmount(event.target.value);
        setCurrency(event.target.value);

        console.log('value is', event.target.value)
    }
    
    const handleClick = event => {
        event.preventDefault();
        console.log('handleClick', amount + currency)
    }





return (
    <>
<form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="currency">Choose Currency</label>

    <select className="form-control" id="currency" value = {currency} onChange={formSubmit}>
    <option>USD</option>
    <option>GBP</option>
    <option>JPY</option>
    </select>

  </div> 
  
  <div className="form-group">
    <label htmlFor="amount">Choose Amount</label>
    <input type="amount" className="form-control" id="amount" value= {amount} onChange={formSubmit}
     placeholder="1000" />
</div>
  <div className="form-group">
    <button className="form-control btn btn-primary" type="submit" onClick={handleClick}>
      Submit
    </button>
</div>
</form>

    Display result here 

</>

);
};
export default Form;