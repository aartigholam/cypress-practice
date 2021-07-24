describe('Checkbox testing on e-commerce site',()=>{

    it.skip('Category page on automaton practice - checkbox test',()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()

        // checked all checkboxes under women category and verify them
        
        cy.get('.checkbox').check().parent().should('have.class','checked')

        //uncheck all checkboxes under women category and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class' ,'checked')
     })


     it('SnapDeal Page - filter checkbox test',()=>{

        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('Laptop')
        cy.contains('Search').click()
        
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').check({force:true})
        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').should('have.checked', 'checked')

        //uncheck
    cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
    .uncheck({force: true})
cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
    .should('not.have.checked', 'checked')

    })

})