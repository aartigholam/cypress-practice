describe('Dropdown test',()=>{

    it.skip('dropdown test',()=>{

        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country')
        .select('Algeria')
        .should('have.value','Algeria')
    })

    it.skip('Google search',()=>{

        cy.visit('https://google.com')
       // cy.get("[class='gLFyf gsfi']").type('cypress')
        cy.get('input.gLFyf.gsfi').type('cypress')

        cy.get('.erkvQe')
        .find('li span')
        .contains('cypress tree').click()

    })

    it('Automation ecommerce website search',()=>{

        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')
        
        cy.get('.ac_results')
        .find('li')
        .contains('T-shirts').click()
    })
})