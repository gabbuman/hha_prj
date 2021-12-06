import React, { Component } from 'react';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';
import { useLocation } from 'react-router';
import DepartmentHome from './DepartmentHome';


interface DptProps{
   dptName: string,
  }

interface DptState{
    dptName: string,
  }

class DptPage extends Component <DptProps, DptState>{
    constructor(props:any){
        super(props); 
        this.state = {
            dptName: props.location.state};
    }
    render() {
       var dpt_name = this.state.dptName;
        return (
            <div>
                <Header title= {"Hope Health Action / " + dpt_name}/>  
                <DepartmentHome dptName = {dpt_name}/>
            </div>
        );
    }
}

export default DptPage
