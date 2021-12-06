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
import CaseStudyEdit from './casestudy/CaseStudyEdit';

interface Props { locale: string }

class App extends Component {

	private locales = {
		'en': 'English',
		'fr': 'French'
	}
	
	constructor(props: Props) {
		super(props);
	
		this.state = {
		  locale: navigator.language
		}
	}

    render() {
		
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<div className="App">
        					<header className="App-header">
          						<h1 className="App-title">HHA Record Management Demo</h1>
        					</header>
        					<p className="App-intro">
          						To change the language of the application, select one of the supported languaged in this dropdown
        					</p>
        					<select>
          						{Object.keys(this.locales).map((key) => {
            					//return <option value={key} key={key}>{this.locales[key]}</option>
          						})}
        					</select>
      					</div>
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
					<Route path='/dataentry' component={DataEntry} />			
					<Route path='/datarecordarchive' component={DptTableView} />		 	
					<Route path='/graph' component={DptGraphCard}/>
					<Route path='/dptpage' component={DptPage} />	
					<Route path='/createdepartment' component={CreateDepartment} />	
					<Route path='/case_study_form' component={CaseStudyInputForm}/>
					<Route path='/case_study_individual/:id' component={CaseStudyIndividual}/>
					<Route path='/case_study_grid' component={CaseStudyGridView}/>
					<Route path='/actioncard' component={DepartmentHome}/>	
					<Route path='/questionlist' component={QuestionList} />
					<Route path='/csedit/:id' component={CaseStudyEdit}/>
				</Switch>
				<ToastContainer/>
			</Router>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
