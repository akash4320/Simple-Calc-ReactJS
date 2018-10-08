import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'reactstrap';
import './App.css';
import Layout from './components/layout'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout/>
      </div>
    );
  }
}

export default App;
