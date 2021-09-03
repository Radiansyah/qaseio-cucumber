import { QaseApi } from 'qaseio';
import { SuiteFilters } from "../node_modules/qaseio/dist/src/models/suites.js";
const qase = new QaseApi("012fe51e349c759a8397d94dbf6619e0eccdbbdf");

import { writeFile } from 'fs'

var strFeature = ""
var allFeature = ""
qase.suites.get("DEMO", 1).then((suitesData) => {
    strFeature = "Feature: " + suitesData.data.title
})

qase.cases.getAll("DEMO", { limit: 20, offset: 0, filters: new SuiteFilters({suite_id: 1}) }).then((casesData) => {

    var bodyFeature = ""
    var casesLength = casesData.data.entities.length
    for(var i = 0; i < casesLength; i++ ) {
        var strScenario = "Scenario: " + casesData.data.entities[i].title
        var strTag = ""
        var strSteps = ""
        for (var j = 0; j < casesData.data.entities[i].tags.length; j++){
            strTag = strTag + "@" + casesData.data.entities[i].tags[j].title + " "
            strSteps = strSteps + "     " + casesData.data.entities[i].steps[j].action + "\n"
        }
        for (var k = 0; k < casesData.data.entities[i].steps.length; k++){
            strSteps = strSteps + "     " + casesData.data.entities[i].steps[k].action + "\n"
        }
        bodyFeature = bodyFeature + "   " + strTag + "\n" + "   " + strScenario + "\n" + strSteps
    }
    allFeature = strFeature + "\n" + bodyFeature
    console.log(allFeature)
    writeFeatureFile(allFeature)
})


function writeFeatureFile(content){
    writeFile('./features/test2.feature', content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}