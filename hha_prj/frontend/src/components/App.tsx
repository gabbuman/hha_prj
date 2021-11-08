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
import { ToastContainer } from 'react-toastify';
import DptGraphView from './home/DptGraph';
import CreateDepartment from './dpt/CreateDepartment';
import CaseStudySubmissionForm from './casestudy/CaseStudyInputForm';
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
					<Route path='/dpttableview' component={DptTableView} />		 	
<<<<<<< HEAD
					<Route path='/dptgraphview' component={DptGraphView} />
					<Route path='/csinput' component={CaseStudySubmissionForm}/>
					<Route path='/csindividual' component={CaseStudyIndividual}/>		 	
=======
					<Route path='/dptgraphview' component={DptGraphView} />		 	
					<Route path='/dptrecordpage' component={DptRecordPage} />	
					<Route path='/createdepartment' component={CreateDepartment} />	
					<Route path='/csinput' component={CaseStudySubmissionForm}/>		 	
>>>>>>> e494c4fe49de300dbb94c527e29ea7a1b9777fcd
				</Switch>
				<ToastContainer/>
			</Router>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
