describe('mouse over test',()=>{
    it.skip('Click on sign up',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
        
    })

    it.skip('Click on Member login link',()=>{

        cy.visit('https://www.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click()
    })

    it('Test add to cart on Ecommerce site',()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross').click()
        // cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.contains('Cart').trigger('mouseover')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')
    })

    
})