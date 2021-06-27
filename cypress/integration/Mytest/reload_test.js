describe('reload test',()=>{

    it('reload page',()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()

        cy.reload()

        cy.contains('Customers').should('be.visible')

        cy.reload(true)
    })
})