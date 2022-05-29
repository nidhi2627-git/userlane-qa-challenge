export class Careers {
    navigate(url){
        cy.visit(url);
        cy.wait(3000);
    }

    checkForOpenJobPositions(jobCategory, jobTitle){
        cy.get('[title="Open Positions"]').click();
        cy.wait(3000);

        cy.get('*[class*="' + jobCategory + '"]').contains(jobTitle).then(($jobel) => {
          cy.wrap($jobel).should('be.visible');
          cy.wrap($jobel).should($a => {
            expect($a.attr('target'), 'target').to.equal('_blank');
            $a.attr('target', '_self');
          }).click();
          cy.wait(2000);
        });
    }

}