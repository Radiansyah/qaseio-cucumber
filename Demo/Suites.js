import { QaseApi } from 'qaseio';
import { SuiteFilters } from "../node_modules/qaseio/dist/src/models/suites.js";
const qase = new QaseApi("012fe51e349c759a8397d94dbf6619e0eccdbbdf");

qase.suites.getAll("DEMO", {filters: new SuiteFilters({search: "Authorization"})}).then((res) => {
    console.log("list all suites from project DEMO with title = Authorization")
    console.log(res.data)
})

qase.suites.get("DEMO", 1).then((res) => {
    console.log("get info suites from project DEMO with suite_id = 1");
    console.log(res.data)
})