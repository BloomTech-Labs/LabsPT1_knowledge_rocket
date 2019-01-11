import React, {Component} from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement, 
        injectStripe, PostalCodeElement} from 'react-stripe-elements';

class BillingForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    e.preventDefault();
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) console.log("Purchase Complete!")
  }

  handleBlur = () => {
    console.log('[blur]');
  };
  handleChange = (change) => {
    console.log('[change]', change);
  };
  handleClick = () => {
    console.log('[click]');
  };
  handleFocus = () => {
    console.log('[focus]');
  };
  handleReady = () => {
    console.log('[ready]');
  };

  createOptions = ({fontSize}) => {
    return {
      style: {
        base: {
          fontSize,
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#aab7c4',
          },
        //   ...(padding ? {padding} : {}),
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
  };

  render() {
    return (
    //   <div className="checkout">
    //     <p>Would you like to complete the purchase?</p>
    //     <CardElement />
    //     <button onClick={this.submit}>Send</button>
    //   </div>
    <form onSubmit={this.submit}>
    
        <label>
        Card number
        <CardNumberElement
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onReady={this.handleReady}
            {...this.createOptions(this.props.fontSize)}
        />
        </label>
        <label>
        Expiration date
        <CardExpiryElement
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onReady={this.handleReady}
            {...this.createOptions(this.props.fontSize)}
        />
        </label>
        <label>
        CVC
        <CardCVCElement
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onReady={this.handleReady}
            {...this.createOptions(this.props.fontSize)}
        />
        </label>
        <label>
        Postal code
        <PostalCodeElement
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onReady={this.handleReady}
            {...this.createOptions(this.props.fontSize)}
        />
        </label>
        <button>Pay</button>
    </form>    
    );
  }
}

export default injectStripe(BillingForm);