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
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("navigate", (url) => {
  cy.visit(url);
});

Cypress.Commands.add("openAI", () => {
  cy.request("GET", "http://localhost:7777/openAI").then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.have.property("model", "gpt-3.5-turbo-0301");
  });
});

Cypress.Commands.add("interceptAPI", (url, body) => {
  cy.intercept(`${url}`, {
    fixture: `${body}`,
  }).as("interceptAPI");
});
