describe('hub spot page feature',()=>{

    it ('hanble hubspot login test',()=>{

        cy.visit('https://app.hubspot.com/login',{failOnStatusCode: false})
        cy.wait(50000)
        cy.get('#username').type('aarti@gmail.com')
        cy.get('#password').type('aarti@123')
        cy.get('#loginBtn').click()
    })
})