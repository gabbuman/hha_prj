import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

class App extends Component {
    render() {
		return (
			<AppRouter></AppRouter>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
