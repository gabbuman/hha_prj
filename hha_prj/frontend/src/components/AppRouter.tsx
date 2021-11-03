import React, { Component, useMemo, useState } from 'react';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
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
import Homepage from './home/Homepage';
import { ToastContainer } from 'react-toastify';
import { UserContext } from './UserContext';

function AppRouter() {
    const [user, setUser] = useState("hello from context");
    const providerValue = useMemo(()=>({user, setUser}), [user,setUser])
    return (
        <Router>
            <Switch>
                <UserContext.Provider value = {providerValue}>
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
                </UserContext.Provider>	
            </Switch>
            <ToastContainer/>
        </Router>
    )
}

export default AppRouter