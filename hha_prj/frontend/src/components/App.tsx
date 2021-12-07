import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import VerNavbar from './layout/VerNavbar';
import Login from './login/Login';
import Register from './login/Register';
import CSPreview from './home/CSPreview';
import Rank from './home/Rank';
import DataEntry from './dataentry/DataEntry';
import DptPage from './dpt/DptPage';
import Homepage from './home/Homepage';
import { ToastContainer } from 'react-toastify';
import {DptTableView} from './DataTable/DptTableView';
import {DptGraphCard} from './home/Department Card/DptGraphCard';
import CreateDepartment from './dpt/CreateDepartment';
import CaseStudyInputForm from './casestudy/CaseStudyInputForm';
import CaseStudyIndividual from './casestudy/CaseStudyIndividual';
import DepartmentHome from './dpt/DepartmentHome';
import QuestionList from './questions/QuestionList';
import CaseStudyGridView from './casestudy/CaseStudyGridView';
import Biosuptform from './biomechanicalform/BioformCard';
import CaseStudyEdit from './casestudy/CaseStudyEdit';
import DptCard from './home/DptCard';

class App extends Component {
    render() {
		
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Register} />
					<Route path='/header' component={() => <Header title={`Hope Health Action`} />}  />
					<Route path='/login' component={Login} />
					<Route path='/rank' component={Rank} />
					<Route path='/dptcard' component={DptCard}/>
					<Route path='/homepage' component={Homepage}/>
					<Route path='/cspreview' component={CSPreview} />
					<Route path='/vernavbar' component={VerNavbar} />
					<Route path='/dataentry' component={DataEntry} />			
					<Route path='/datarecordarchive' component={DptTableView} />		 	
					<Route path='/graph' component={DptGraphCard}/>
					<Route path='/dptpage' component={DptPage} />	
					<Route path='/createdepartment' component={CreateDepartment} />	
					<Route path='/case_study_form' component={CaseStudyInputForm}/>
					<Route path='/case_study_individual/:id' component={CaseStudyIndividual}/>
					<Route path='/case_study_grid' component={CaseStudyGridView}/>
					<Route path='/actioncard' component={DepartmentHome}/>
					<Route path='/bio_support_form' component={Biosuptform}/>		
					<Route path='/questionlist' component={QuestionList} />
					<Route path='/csedit/:id' component={CaseStudyEdit}/>
				</Switch>
				<ToastContainer/>
			</Router>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
