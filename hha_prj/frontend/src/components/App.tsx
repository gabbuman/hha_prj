import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import VerNavbar from './layout/VerNavbar';
import Login from './login/Login';
import Register from './login/Register';
import  { DptOverview } from './home/DptCard';
import CSPreview from './home/CSPreview';
import Rank from './home/Rank';
import {dpts_Data} from './home/DptData';
import MonthlyRecord from './dpt/MonthlyRecord';
import DptRecordPage from './dpt/DptRecordPage';
import {DptTableView} from './home/DptTableView';
import Homepage from './home/Homepage';
import { ToastContainer } from 'react-toastify';
import {DptGraphCard, GraphProps} from './home/Department Card/DptGraphCard';
import { sampleData } from './home/Department Card/RecordData';
import CreateDepartment from './dpt/CreateDepartment';
import CaseStudySubmissionForm from './casestudy/CaseStudyInputForm';
import CaseStudyIndividual from './casestudy/CaseStudyIndividual';
import DepartmentHome from './dpt/DepartmentHome';

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
					<Route path='/dptgraphview' component={() => 
						<DptGraphCard width={500} 
									  height={300} 
									  recordDataSet={sampleData} />
					}/>	
					<Route path='/dptrecordpage' component={DptRecordPage} />	
					<Route path='/createdepartment' component={CreateDepartment} />	
					<Route path='/csinput' component={CaseStudySubmissionForm}/>
					<Route path='/csindividual' component={CaseStudyIndividual}/>	
					<Route path='/actioncard' component={DepartmentHome}/>	
				</Switch>
				<ToastContainer/>
			</Router>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
