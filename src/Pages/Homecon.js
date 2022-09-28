import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Homecon extends Component {
  render() {
    return (
      <div>
        <h1 className='text'>Hi!, everyOne..</h1>
        <p className='para'>The electrocardiogram (ECG) is used extensively in the diagnosis of heart disease,<br/> ranging from congenital heart disease in infants to myocardial infarction and myocarditis in adults. <br/>Several different types of electrocardiogram exist.</p>
        <Button className='btn' href="/Login">Log-In</Button>
      </div>
    );
  }
}
