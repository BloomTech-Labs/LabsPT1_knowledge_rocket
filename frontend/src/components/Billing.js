import React, {Component, Fragment} from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement, 
        injectStripe, PostalCodeElement} from 'react-stripe-elements';

class BillingForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    e.preventDefault();
    let {token} = await this.props.stripe.createToken();
    console.log(token.id);
    console.log(`token ${localStorage.getItem('token')}`);
    let response = await fetch("http://localhost:8000/subscribe", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `token ${localStorage.getItem('token')}`
      }),
      body: JSON.stringify({ source: token.id })
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
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };
  };

  render() {
    return (
        <Fragment>
            <h1>Billing</h1>
            <form onSubmit={this.submit}>
                <label>
                    Card number
                </label>
                <CardNumberElement
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onReady={this.handleReady}
                    {...this.createOptions(this.props.fontSize)}
                />
                <label>
                    Expiration date
                </label>
                <CardExpiryElement
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onReady={this.handleReady}
                    {...this.createOptions(this.props.fontSize)}
                />
                <label>
                    CVC
                </label>
                <CardCVCElement
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onReady={this.handleReady}
                    {...this.createOptions(this.props.fontSize)}
                />
                <label>
                    Postal code
                </label>
                <PostalCodeElement
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onReady={this.handleReady}
                    {...this.createOptions(this.props.fontSize)}
                />
                <input type="checkbox" name="subPrice" />1 Year Subscription - $9.99<br/>
                <button>Buy Now</button>
            </form>    
        </Fragment>
    );
  }
}

export default injectStripe(BillingForm);