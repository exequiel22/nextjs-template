describe('App', () => {
  it('should render frontpage', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    cy.get('h1').contains('Hello world');
  });

  it('should render example page', () => {
    cy.visit('http://localhost:3000/example/holamundo');
    cy.contains('holamundo');
  });
});
