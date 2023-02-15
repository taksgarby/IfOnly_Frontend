import React from 'react';
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="currency">Choose Currency</label>

    <select className="form-control" id="currency">
    <option>USD</option>
    <option>GBP</option>
    <option>JPY</option>
    </select>

  </div> 
  
  <div className="form-group">
    <label htmlFor="amount">Choose Amount</label>
    <input type="amount" className="form-control" id="amount"
     placeholder="1000" />
</div>
  <div className="form-group">
    <button className="form-control btn btn-primary" type="submit">
      Submit
    </button>
</div>
</form>
);
};
export default Form;