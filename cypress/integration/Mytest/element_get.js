
describe('check element get concept',()=>{
 
 it('element get testing', ()=>{

    cy.visit('https://www.freshworks.com/')
    cy.contains('Customers').click()

    cy.url().should('include','/customers')

    cy.get('div.container.banner-content.l-banner h1')
    .should('be.visible')
    .and('contain','Exceptional experiences')
    .and('have.length',1)

    cy.get('ul.footer-nav li').should('have.length', 31)
    cy.get('ul.footer-nav li').find("a[href*='footer']").should('have.length', 10)


 })




})