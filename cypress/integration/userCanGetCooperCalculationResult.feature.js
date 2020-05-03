describe('Cooper client calculates successfully', () => {
    it('calculates cooper performance', () => {
        cy.visit('/');
        cy.get('input#distance').type("1000");
        cy.get('div#gender.ui.selection.dropdown').click();
        cy.contains('female').click();
        cy.get('input#age').type('23');
        cy.get('p#cooper-message').should(
            'contain',
            '23 y/o female running 1000 meters.'
        );
        cy.get('p#cooper-result').should('contain', 'Result: Poor')
    });
  });   