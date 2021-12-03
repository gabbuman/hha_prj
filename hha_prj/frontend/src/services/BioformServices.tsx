import http from "../http-common"
import axios from 'axios';
import BioformData from "../types/Biomechanicalsupt"


const getAll= (dept: string) => {
    return http.get<Array<BioformData>>("/get_bio_forms/", {
        params: {
            department: dept
        }
    });
};

const remove= (id: any) => {
    return http.delete<any>("/bio_support/"+ id + "/");
}; 

const BioformServices = {
    getAll,
    remove,
};

export default BioformServices;