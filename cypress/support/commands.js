
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('loginAuth', (overrides = {}) => {
    Cypress.log({
      name: 'loginViaAuth0',
    });
  
    const options = {
      method: 'POST',
      url: Cypress.env('auth_url'),
      qs: {
        ReturnUrl: '/connect/authorize/callback',
        client_id: Cypress.env('auth_client_id'),
        redirect_uri: 'https://hsqahsiqweb.azurewebsites.net/signin-callback.html',
        response_type: 'id_token token',
        scope: 'openid profile role accountapi leadplusapi newsapi collaborationapi bpoapi invoiceapi contractapi geoapi aggregationapi marketingapi drminvoiceapi',
        username: Cypress.env('auth_username'),
        password: Cypress.env('auth_password'),
      }};
    cy.request(options);
    userLogin.mapUserCookies();
});
