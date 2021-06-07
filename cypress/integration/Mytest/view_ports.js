describe('Testing diff. view ports', ()=>{

    before(()=>{
        console.log('running my tests')
    })

    beforeEach(()=>{
        cy.visit('www.google.com')
    })

    it('open in macbook 13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot(
        cy.wait(200)
        )
    })

    it('open in mackbook 15', ()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
        
    })

    it('open in samsung-note9',()=>{
        cy.viewport('samsung-note9')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in 550 and 750',()=>{
        cy.viewport(550,750)
        cy.screenshot()
        cy.wait(200)
    })

})