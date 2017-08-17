import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SeatLayout from './SeatLayout/components/seatLayout.js';
import { seatNo, fbConfig} from './data';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    const config = fbConfig;

   // this.app = firebase.initializeApp(config);
    //this.database = this.app.database();
    this.state = seatNo
  }
  
  render() {
    return (
      <div>
        <SeatLayout column1={this.state.column1} column2={this.state.column2} />
      </div>
    );
  }
}

export default Home;

