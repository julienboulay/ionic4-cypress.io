
describe('Cypress app', function () {
  it('display 3 tabs', function () {
    cy.visit('http://localhost:8100');

    cy.contains('Tab Two').click();
    cy.url().should('include', '/tabs/tab2');
    cy.contains('Tab Three').click();
    cy.url().should('include', '/tabs/tab3');

  })

})