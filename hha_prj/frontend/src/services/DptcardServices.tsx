import http from "../http-common"
import DeptcardData from "../types/Deptcard"

const getAll= (dept: string) => {
    return http.get<Array<DeptcardData>>("/GetDepartmentReminders/", {
        params: {
            department: dept
        }
    });
};

const BioformServices = {
    getAll,
};

export default BioformServices;