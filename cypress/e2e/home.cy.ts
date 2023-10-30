/**
 * skenario testing home
 *
 * - Home spec
 *  - should display home page
 *  - should redirect to thread page
 */

describe('Home spec', () => {
  it('should display home page', () => {
    cy.visit(Cypress.env('APP_URL'))

    cy.get('[data-testid="home-page"]').should('be.visible')
  })

  it('should redirect to thread page', async () => {
    cy.visit(Cypress.env('APP_URL'))

    // the redirect is not instant, so we need to wait
    cy.wait(5000).then(() => {
      cy.get('[data-testid="thread-page"]').should('be.visible')
    })
  })
})
