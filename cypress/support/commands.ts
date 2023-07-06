/// <reference types="cypress" />

// Extend the Chainable interface with getByData method
declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}

// cy.get("[data-test='foo']") -> cy.getByData("foo")
Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
