import {helper} from "../../../support/helper";
import {Careers} from "../../../pages/Careers";
import {QAJobApply} from "../../../pages/QAJobApply";

const helperObj = new helper();
const careers = new Careers();
const qaJobApply = new QAJobApply();
    
describe('Carrer Tests', () => {
    const testData_list = helperObj.getTestData('testdata.json');
 
    it('Check if user is able to apply for the job', () => {
      careers.navigate();
      careers.checkForOpenQAPositions();
      qaJobApply.applyForJob(testData_list);
      });
});






