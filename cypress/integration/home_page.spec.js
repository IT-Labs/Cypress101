import {elements} from './elements';

describe('Home Page', function () {
  before(function () {
      cy.visit(Cypress.env('auth_url'))
      .get(elements.email)
      .type(Cypress.env('auth_username'))
      cy.get(elements.password)
      .type(Cypress.env('auth_password'))
      cy.get(elements.submitBtn).click()
  })
  it('Validate Page Title', function() {
    cy.get(elements.dashboardPageTitle).should('have.text', 'Direct Rebate Management')
  })

  it('Validate Side Bar Menu have Home Navigation with correct value', function() {
    cy.get(elements.sideBarMenu(1)).should('have.text', 'Home')
  })

  it('Validate Side Bar Menu have Extend Navigation with correct value', function() {
    cy.get(elements.sideBarMenu(2)).should('have.text', 'Extend')
  })

  it('Validate Side Bar Menu have Direct Rebates Navigation with correct value', function() {
    cy.get(elements.sideBarMenu(3)).should('have.text', 'Direct Rebates')
  })
});