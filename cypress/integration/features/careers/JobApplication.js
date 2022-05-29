import {helper} from "../../../support/helper";
import {Careers} from "../../../pages/Careers";
import {JobApply} from "../../../pages/JobApply";

const helperObj = new helper();
const careers = new Careers();
const jobApply = new JobApply();
    
describe('Carrer Tests', () => {
    const testData_list = helperObj.getTestData('testdata.json');
 
    it('Check if user is able to apply for the job', () => {
      careers.navigate(testData_list.careerURL);
      careers.checkForOpenJobPositions(testData_list.jobCategory, testData_list.jobTitle);
      jobApply.applyForJob(testData_list);
      });
});






