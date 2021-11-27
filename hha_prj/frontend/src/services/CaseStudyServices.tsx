import http from "../http-common"
import axios from 'axios';
import CaseStudyData from "../types/CaseStudy"


const getAll= (dept: string) => {
    return http.get<Array<CaseStudyData>>("/case_study/?department=" + dept +"/");
};

/* const get= (id: any) => {
    return http.get<CaseStudyData>(`/case_study/${id}`);
};
*/

const remove= (id: any) => {
    return http.delete<any>("/case_study/"+ id + "/");
}; 

const CaseStudyServices = {
    getAll,
    remove,
    /* get,
    remove, */
};

export default CaseStudyServices;