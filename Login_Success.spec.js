

describe('QA Automation', function(){
    it('Login Test', function(){
        
        cy.visit('https://staging1.alo-tech.com/v2/tr/login2.html#/')

        /*URL doğrulama*/
        cy.url().should('include','/v2/tr/login2.html#/')

       /*Web Element id access with get('#...') */
       cy.get('#email')
            .type('emre.ozturk@alo-tech.com').should('have.value','emre.ozturk@alo-tech.com')
        
       cy.get('#password')
            .type('123456').should('have.value','123456')
        
       /*Girilen text'i içeren web element e erişim sağlama*/    
       /*cy.contains('Giriş Yap').click()*/
       cy.get('.MuiButton-label').click()

    })
})