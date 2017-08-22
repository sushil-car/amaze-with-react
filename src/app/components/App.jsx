/*
    ./client/components/App.jsx
*/
import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello React</h1>
        <br></br>        
        <Button color="success">With Bootstrap 4.0!</Button>
      </div>);
  }
}
