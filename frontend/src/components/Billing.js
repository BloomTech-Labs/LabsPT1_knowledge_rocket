import React, {Component} from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement, 
        injectStripe, PostalCodeElement} from 'react-stripe-elements';
import { Row, Col, Container, Form, FormGroup, Label, Input, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import SidebarNav from "./SidebarNav";
import "../css/Billing.css";

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
          fontSize: '1.5rem',
          color: '#424770',
          letterSpacing: '0.055em',
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
      <Container>
        <Row>
          <Col lg="3">
              <SidebarNav />
          </Col>
          <Col lg="9">
            <Row>
              <Col>
              <h1>Billing</h1>
              </Col>
            </Row>
            <Row>
              <Form onSubmit={this.submit}>
                <FormGroup>
                  <Label className="cc-text" for="cardNumber">Card number</Label>
                  <CardNumberElement className="cc-element"
                      id="cardNumber"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onReady={this.handleReady}
                      {...this.createOptions(this.props.fontSize)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="cc-text" for="expirationDate">Expiration Date</Label>
                  <CardExpiryElement className="cc-element"
                      id="expirationDate"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onReady={this.handleReady}
                      {...this.createOptions(this.props.fontSize)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label className="cc-text" for="cvc">CVC</Label>
                  <CardCVCElement className="cc-element"
                      id="cvc"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onReady={this.handleReady}
                      {...this.createOptions(this.props.fontSize)}
                  />
                </FormGroup>  

                <FormGroup>
                  <Label className="cc-text" for="postal_code">Postal Code</Label>
                  <PostalCodeElement className="cc-element"
                      id="postal_code"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
                      onReady={this.handleReady}
                      {...this.createOptions(this.props.fontSize)}
                  />
                </FormGroup>

                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="subPrice" />{' '}
                    <span>1 Year Subscription - $9.99</span>
                  </Label>
                </FormGroup>
                
                <Button>Buy Now</Button>
              </Form>
              
            </Row>
            
            </Col>
          </Row>
        </Container>
    );
  }
}

export default injectStripe(BillingForm);