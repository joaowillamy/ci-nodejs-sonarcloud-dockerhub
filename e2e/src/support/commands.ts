// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.get('#username').type('my-email@something');

  cy.get('#password').type('my-password');
  
  cy.get('button').contains('Login').click();
});
