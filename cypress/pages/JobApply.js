export class JobApply {

    applyForJob(testData){
      cy.get('a:contains(Apply for this job)').first().click();
      cy.wait(3000);
      const filepath = testData.resume;
      cy.get('#resume-upload-input').attachFile(filepath);
      cy.wait(15000);
      //cy.get('.resume-upload-success').invoke('attr', 'style').should('eq', 'display: inline;');
      //cy.get('.resume-upload-label').contains('Success!');
      cy.wait(2000);
      cy.get('[name="name"]').type(testData.username);
      cy.wait(2000);
      cy.get('[name="email"]').type(testData.useremail);
      cy.wait(2000);
      cy.get('[name="phone"]').type(testData.phone);
      cy.wait(2000);
      cy.get('[name="org"]').type(testData.currentCompany);
      cy.wait(2000);
      cy.get('[name="urls[LinkedIn]"]').type(testData.linkedinURL);
      cy.wait(2000);
      cy.get('[name="cards[b6003f01-23c3-4880-bdc9-a553b23948a9][field0]"]').type(testData.noticePeriod);
      cy.wait(2000);
      cy.get('[name="cards[feb7d9d3-23a6-4c29-9e9f-5d9db2a872f4][field0]').check(testData.placeOfLiving);
      cy.wait(2000);
      cy.get('[name="cards[a84c6739-175e-4233-aeee-8806fce30c87][field0]').type(testData.salaryExpectation);
      cy.wait(2000);
      cy.get('[name="cards[12a521d5-15b0-4471-9f02-891fdb44fa31][field0]').check(testData.technicalSkills);
      cy.wait(2000);
    }

}