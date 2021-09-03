import { QaseApi } from 'qaseio';
import { SuiteFilters } from "../node_modules/qaseio/dist/src/models/suites.js";
const qase = new QaseApi("012fe51e349c759a8397d94dbf6619e0eccdbbdf");

qase.cases.getAll("DEMO", { limit: 20, offset: 0, filters: new SuiteFilters({suite_id: 1}) }).then((res) => {
    console.log("list all testcases from DEMO project with suite_id = 1");
    console.log(res.data.entities[0].steps)
    console.log(res.data.entities[0].tags)
})

qase.cases.get("DEMO", 11).then((res) => {
    console.log("get info cases from DEMO project with case_id = 11");
    console.log(res.data)
})