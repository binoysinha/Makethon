import React, { Component } from 'react';
import { Switch, Route, matchPath } from "react-router-dom";

import Home from './Home';
import BusInfo from './BusInfo/components/BusInfo';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
//import NotFound from './dumbComponents/NotFound';
import Header from './Header/components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
			<div className="container">
				<Header />
				<BusInfo />
				<Route
					render={({ location }) => (
						<Switch key={location.key} location={location}>
							<Route
								exact
								path="/"
								component={Home}
							/>
							<Route
								exact
								path="/chat"
                component={ThreadDisplay}
							/>

						</Switch>
					)}
				/>
			</div>
		);
  }
}

export default App;
