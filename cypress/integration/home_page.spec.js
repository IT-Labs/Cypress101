describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/')
      .get('#Email')
      .type('')
      cy.get('#Password')
      .type('')
      cy.get('#submitButton').click()
      cy.get('.page-title-header').should('have.text', 'Column content')
    })
  })