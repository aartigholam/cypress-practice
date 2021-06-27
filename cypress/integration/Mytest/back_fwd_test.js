describe('back and forward button simulate',()=>{

    it('back and fwd test',()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        .go('back')
        .go('forward')


    //    cy.go('back')
    //    cy.go(-1)
    //    cy.wait(200)
    //    cy.go('forward')
    //    cy.go(1)
    })
})