describe('Item Selection Tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should allow selecting up to 6 user items', () => {
      cy.get('.user-items .item-box').first().click()
      cy.get('.user-items .item-box').eq(1).click()
      cy.get('.selected-user-items .item-box:not(.empty)').should('have.length', 2)
      cy.get('.selection-info').should('contain', 'selected: 2/6')
    })
  
    it('should not allow selecting more than 6 user items', () => {
      // Пытаемся выбрать 7 предметов
      for (let i = 0; i < 7; i++) {
        cy.get('.user-items .item-box').eq(i).click()
      }
      cy.get('.selected-user-items .item-box:not(.empty)').should('have.length', 6)
      cy.get('.selection-info').should('contain', 'selected: 6/6')
    })
  
    it('should allow selecting only one store item', () => {
      // Выбираем первый предмет
      cy.get('.store-items .item-box').first().click()
      cy.get('.selected-store-item .item-box:not(.empty)').should('exist')
      
      // Выбираем второй предмет
      cy.get('.store-items .item-box').eq(1).click()
      cy.get('.selected-store-item .item-content').should('contain', 'Jacket 2')
    })
  })