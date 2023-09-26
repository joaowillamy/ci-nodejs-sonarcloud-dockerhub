describe('01', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('#username').type('my-email@something');

    cy.get('#password').type('my-password');
    
    cy.get('button').contains('Login').click();
  });
});
