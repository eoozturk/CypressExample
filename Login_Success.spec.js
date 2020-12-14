

describe('QA Automation', function(){
    it('Login Test', function(){
        
        cy.visit('Your Test URL')

        /*URL doğrulama*/
        cy.url().should('include','URL Control')

       /*Web Element id access with get('#...') */
       cy.get('#email')
            .type('Your Mail').should('Mail Control')
        
       cy.get('#password')
            .type('Your Password').should('have.value','Password Control')
        
       /*Girilen text'i içeren web element e erişim sağlama*/    
       /*cy.contains('Giriş Yap').click()*/
       cy.get('.MuiButton-label').click()

    })
})
