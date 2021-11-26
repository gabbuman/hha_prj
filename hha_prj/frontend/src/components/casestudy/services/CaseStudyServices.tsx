import http from "../http-common"
import axios from 'axios';
import CaseStudyData from "../types/CaseStudy"


const getAll= () => {
    return http.get<Array<CaseStudyData>>("/case_study");
};

/* const get= (id: any) => {
    return http.get<CaseStudyData>(`/case_study/${id}`);
};

const remove= (id: any) => {
    return http.delete<any>(`/case_study/${id}`);
}; */

const CaseStudyServices = {
    getAll,
    /* get,
    remove, */
};

export default CaseStudyServices;