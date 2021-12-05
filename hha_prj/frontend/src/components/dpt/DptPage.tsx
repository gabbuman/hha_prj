import React, { Component } from 'react';
import VerNavbar from '../layout/VerNavbar';
import Header from '../layout/Header';


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
                <VerNavbar dptName={dpt_name}/>
            </div>
        );
    }
}

export default DptPage
