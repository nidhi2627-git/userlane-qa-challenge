export class Careers {
    navigate(){
        cy.visit('https://www.userlane.com/careers/');
        cy.wait(3000);
    }

    checkForOpenQAPositions(){
        cy.get('[title="Open Positions"]').click();
        cy.wait(3000);
        cy.get('[class="btn Engineering"]').click();
        cy.wait(3000);

        cy.get('*[class*="Engineering"]').each(($el) => {
          if($el.text().includes('Test'))
          {
            cy.wrap($el).children('a').should($a => {
              expect($a.attr('target'), 'target').to.equal('_blank');
              $a.attr('target', '_self');
            }).click();
            cy.wait(2000);
            return false;
          }
        });
    }

}