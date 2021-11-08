import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import VerNavbar from './layout/VerNavbar';
import Login from './login/Login';
import Register from './login/Register';
import DptCard, { DptOverview } from './home/DptCard';
import CSPreview from './home/CSPreview';
import Rank from './home/Rank';
import {dpts_Data} from './home/DptData';
import MonthlyRecord from './dpt/MonthlyRecord';
import DptRecordPage from './dpt/DptRecordPage';
import TableData, {DptTableView} from './home/DptTable';
import Homepage from './home/Homepage';
import CaseStudySubmissionForm from './casestudy/CaseStudyInputForm';
import { ToastContainer } from 'react-toastify';
import DptGraphView from './home/DptGraph';
import CaseStudyIndividual from './casestudy/CaseStudyIndividual';
class App extends Component {
    render() {
		
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<h1>HHA Record Management Demo</h1>
					</Route>
					
					<Route path='/header' component={() => <Header title={`Hope Health Action`} />}  />

					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/rank' component={Rank} />
					<Route path='/dptcard' component={DptOverview}>
						<DptOverview departmentData={dpts_Data}/>
					</Route>
					<Route path='/homepage' component={Homepage}/>
					<Route path='/cspreview' component={CSPreview} />
					<Route path='/vernavbar' component={VerNavbar} />
					<Route path='/monthlyrecord' component={MonthlyRecord} />	
					<Route path='/dptrecordpage' component={DptRecordPage} />			
					<Route path='/dpttableview' component={DptTableView} />		 	
					<Route path='/dptgraphview' component={DptGraphView} />
					<Route path='/csinput' component={CaseStudySubmissionForm}/>		 	
				</Switch>
				<ToastContainer/>
			</Router>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
