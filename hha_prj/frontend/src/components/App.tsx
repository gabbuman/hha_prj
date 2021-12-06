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
import { AuthProvider } from '../contexts/AuthContext';
import { UserProvider } from '../contexts/UserContext';
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoutes from '../protected-routes/ProtectedRoutes';
import Error from './error/Error';
const queryClient = new QueryClient();
import CaseStudyEdit from './casestudy/CaseStudyEdit';

class App extends Component {
    render() {
		return (
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<UserProvider>
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
								<ProtectedRoutes
									exact
									path='/homepage'
									component={Homepage}
									template={"accessibleAfterLogin"}
								/>
								<ProtectedRoutes
									exact
									path='/creatdepartment'
									component={CreateDepartment}
									template={"accessibleAfterLogin"}
								/>
								<Route path='/cspreview' component={CSPreview} />
								<Route path='/vernavbar' component={VerNavbar} />		
								<Route path='/datarecordarchive' component={DptTableView} />		 	
								<Route path='/case_study_individual' component={CaseStudyIndividual}/>
								<Route path='/case_study_grid' component={CaseStudyGridView}/>
								<Route path='/actioncard' component={DepartmentHome}/>	
								<Route path='/questionlist' component={QuestionList} />
								<Route
									path="*"
									component={() => <Error msg={"404 NOT FOUND"} />}
								/>
								<Route path='/dataentry' component={DataEntry} />				 	
								<Route path='/graph' component={DptGraphCard}/>
								<Route path='/dptpage' component={DptPage} />	
								<Route path='/csedit/:id' component={CaseStudyEdit}/>
							</Switch>
							<ToastContainer/>
						</Router>
					</UserProvider>
				</AuthProvider>
			</QueryClientProvider>
		)
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
