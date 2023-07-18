describe('SideComponent', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
    cy.fixture('items-list.json').as('itemsList')
    cy.fixture('user-items-list.json').as('userItemsList')

    cy.intercept('GET', '/user-items-list.json', {
      fixture: 'user-items-list.json'
    })
    cy.intercept('GET', '/items-list.json', {
      fixture: 'items-list.json'
    })
  })

  it('Cheking left side', () => {
    cy.get('[data-cy="left-side"]').within(() => {
      cy.get('[data-cy="selected"]').should('not.exist')
      cy.get('.item').eq(0).click()
      cy.get('.item').eq(3).click()
      cy.get('.selected-items').children().should('have.length', 2)
      cy.get('.selected-items').children().eq(0).should('contain', 'Shoes 1')
      cy.get(
        '.items-list > [data-cy="items-list-wrapper"] > [data-cy="item-1"]'
      ).click()
      cy.get(
        '.items-list > [data-cy="items-list-wrapper"] > [data-cy="item-3"]'
      ).click()
      cy.get('.selected-items').should('contain', 'Please select items(max: 6)')
    })
  })
  it('Cheking right side', () => {
    cy.get('[data-cy="right-side"]').within(() => {
      cy.get('[data-cy="item-11"]').click()
      cy.get('.selected-item').should('contain', 'Jacket 1')
      cy.get('[data-cy="item-12"]').click()
      cy.get('.selected-item').should('contain', 'Jacket 2')
      cy.get('[data-cy="item-12"]').click()
      cy.get('.selected-item').should('contain', 'Please select item')
    })
  })
})
