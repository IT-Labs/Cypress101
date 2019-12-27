import {elements} from './elements';

describe('The Home Page', function() {
    it('successfull login', function() {
      cy.visit('/')
      .get(elements.email)
      .type('')
      cy.get(elements.password)
      .type('')
      cy.get('#submitButton').click()
      cy.get('.page-title-header').should('have.text', 'Direct Rebate Management')
    })
  })
  