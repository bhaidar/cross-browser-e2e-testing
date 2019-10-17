/// <reference types="Cypress" />

context('Applitools', () => {
    beforeEach(() => {
        cy.visit('https://applitools.com')
    })

    it('search for visual grid', () => {

        // get and click the search icon
        cy.get('span.sb-search-icon.link').click();

        // type the text "visual grid" and hit Enter
        cy.get('input#searchBox')
            .type('visual grid')
            .should('have.value', 'visual grid')
            .type('{enter}');

        // locate the 'Introduction to Visual Grid' link and click it
        cy.get('ul.ss360-list')
            .first()
            .find('a')
            .first()
            .click({ force: true });

        // you are on the Visual Grid page, verify
        cy.get('#document-body')
            .find('h1')
            .should('be.visible')
            .and('contain.text', 'Introduction to the Visual Grid');
    });
})
