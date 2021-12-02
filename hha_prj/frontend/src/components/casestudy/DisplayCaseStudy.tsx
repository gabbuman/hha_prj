import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { endpoint } from '../Endpoint';

const DisplayCaseStudy = () => {

    const [caseStudyList, setCaseStudyList] = useState([])

    const getCaseStudyList = async() =>{
        const response = await axios.get(endpoint + 'api/case_study/')
        console.log(response.data)
    }

    useEffect(() => {
        getCaseStudyList();
    }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default DisplayCaseStudy;