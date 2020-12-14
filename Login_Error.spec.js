describe('QA Automation', function(){
    it('Login Error Test', function(){
        
        cy.visit('https://staging1.alo-tech.com/v2/tr/login2.html#/')

        /*URL doğrulama*/
        cy.url().should('include','/v2/tr/login2.html#/')

       /*Web Element id access with get('#...') */
       cy.get('#email')
            .type('emre.ozturk@alo-tech.com').should('have.value','emre.ozturk@alo-tech.com')
        
       cy.get('#password')
            .type('123456789').should('have.value','123456789')
        
       /*Girilen text'i içeren web element e erişim sağlama*/    
       /*cy.contains('Giriş Yap').click()*/
       cy.get('.MuiButton-label').click()
       
       /*Web elemetin içerisinde bulunan text'i doğrulama */
        if(cy.get('#password-helper-text').should('have.text', 'Kullanıcı bulunamadı veya hatalı şifre.'))
        {
            cy.contains('Parolamı unuttum').click()
        }

        cy.get('#outlined-email-input')
            .type('emre.ozturk@alo-tech.com').should('have.value','emre.ozturk@alo-tech.com')
        cy.get('.forgotpassword-button-label').click()
        
        cy.screenshot('screenshot')
    })
})