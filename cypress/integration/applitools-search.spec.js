/// <reference types="Cypress" />

context('Applitools', () => {
    beforeEach(() => {

        // Open the Applitools Test
        cy.eyesOpen({
            appName: 'Cross Browser Testing',
            browser: [
                { width: 800, height: 600, name: 'firefox' },
                { width: 1024, height: 768, name: 'chrome' },
                { deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' }
            ]
        });

        cy.visit('https://applitools.com')
    });

    afterEach(() => {
        // Close the active test
        cy.eyesClose();
    })

    it('search for visual grid', () => {

        // Take a snapshot of the Applitools home page
        cy.eyesCheckWindow('Main Page');

        // get and click the search icon
        cy.get('span.sb-search-icon.link').click();

        // type the text "visual grid" and hit Enter
        cy.get('input#searchBox')
            .type('visual grid')
            .should('have.value', 'visual grid')
            .type('{enter}');

        // Take a snapshot of the search results
        cy.eyesCheckWindow('Search Results');

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

        // Take a snapshot of the Introduction to the Visual Grid page
        cy.eyesCheckWindow('Introduction to the Visual Grid page');
    });
})
