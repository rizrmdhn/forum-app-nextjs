/**
 * skenario testing login
 *
 * - Login spec
 *  - should display login page
 *  - should display alert when email is empty
 *  - should display alert when password is empty
 *  - should display alert when email and password is wrong
 *  - should display thread page when email and password is correct
 *  - should display alert when email and password is wrong
 */

const url = Cypress.env('APP_URL')

describe('Login spec', () => {
  it('should display login page', () => {
    cy.visit(url + '/login')

    cy.get('[data-testid="email"]').should('be.visible')
    cy.get('[data-testid="password"]').should('be.visible')
    cy.get('[data-testid="login-btn"]').should('be.visible')
    cy.get('[data-testid="need-account"]').should('be.visible')
    cy.get('[data-testid="register-here"]').should('be.visible')
  })

  it('should display alert when email is empty', () => {
    cy.visit(url + '/login')

    cy.get('[data-testid="login-btn"]').click()

    cy.get('[data-testid="my-toast"]').should('be.visible')
  })

  it('should display alert when password is empty', () => {
    cy.visit(url + '/login')

    cy.get('[data-testid="email"]').type('test')
    cy.get('[data-testid="login-btn"]').click()

    cy.get('[data-testid="my-toast"]').should('be.visible')
  })

  it('should display alert when email and password is wrong', () => {
    cy.visit(url + '/login')

    cy.get('[data-testid="email"]').type('test')
    cy.get('[data-testid="password"]').type('test')
    cy.get('[data-testid="login-btn"]').click()

    cy.get('[data-testid="my-toast"]').should('be.visible')
  })

  it('should display thread page when email and password is correct', () => {
    cy.visit(url + '/login')

    cy.get('[data-testid="email"]').type('aze@mail.com')
    cy.get('[data-testid="password"]').type('aze12345')
    cy.get('[data-testid="login-btn"]').click()

    cy.get('[data-testid="thread-page"]').should('be.visible')
  })
})
