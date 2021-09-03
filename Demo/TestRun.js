import { QaseApi } from 'qaseio';
import { RunCreate } from '../node_modules/qaseio/dist/src/models/runs.js';
const qase = new QaseApi("012fe51e349c759a8397d94dbf6619e0eccdbbdf");

const run = new RunCreate("test", [1, 2, 3], { description: "test run ke 2" })
qase.runs.create("DEMO", run).then((res) => {
    console.log("Create test_run name 'test' include test_case_id = 1 ,2 ,3 in project DEMO");
    console.log(res.data)
})

