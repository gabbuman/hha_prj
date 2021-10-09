import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import VerNavbar from './layout/VerNavbar';
import Login from './login/Login';
import DptCard from './home/DptCard';
import CSPreview from './home/CSPreview';
import Rank from './home/Rank';
import DataForm from './dpt/DataForm';

class App extends Component {
    render() {

    	// return (
    	// 	<Header />
    	// )
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<p>nah fam</p>
					</Route>
					<Route path='/header' component={() => <Header title={`Hope Health Action`} />}  />
					<Route path='/login' component={Login} />
					<Route path='/rank' component={Rank} />
					<Route path='/dptcard' component={DptCard} />
					<Route path='/cspreview' component={CSPreview} />
					<Route path='/vernavbar' component={VerNavbar} />
					<Route path='/dataform' component={DataForm} />					
				</Switch>
			</Router>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));