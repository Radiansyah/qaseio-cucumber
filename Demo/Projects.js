import { QaseApi } from 'qaseio';
import { ProjectCreate } from '../node_modules/qaseio/dist/src/models/projects.js';
const qase = new QaseApi("012fe51e349c759a8397d94dbf6619e0eccdbbdf");

const prj = new ProjectCreate("DEMO_TWO", "dmtwo")
qase.projects.create(prj).then((res) => {
    console.log("create project with name DEMO_TWO and project_id dmtwo")
    console.log(res.data)
})

qase.projects.getAll(100).then((res) => {
    console.log("list all project limit 100")
    console.log(res.data)
})

qase.projects.get("DEMO").then((res) => {
    console.log("get info of DEMO project")
    console.log(res.data)
})

qase.projects.get("DEMO").then((exists) => {
    console.log("check whether project DEMO is exist")
    console.log(exists)
})
