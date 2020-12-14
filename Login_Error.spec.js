describe('QA Automation', function(){
    it('Login Error Test', function(){
        
        cy.visit('Your Test URL')

        /*URL doğrulama*/
        cy.url().should('include','URL Control')

       /*Web Element id access with get('#...') */
       cy.get('#email')
            .type('Your Mail').should('have.value','Mail Control')
        
       cy.get('#password')
            .type('Your Password').should('have.value','Password Control')
        
       /*Girilen text'i içeren web element e erişim sağlama*/    
       /*cy.contains('Giriş Yap').click()*/
       cy.get('.MuiButton-label').click()
       
       /*Web elemetin içerisinde bulunan text'i doğrulama */
        if(cy.get('#password-helper-text').should('have.text', 'Kullanıcı bulunamadı veya hatalı şifre.'))
        {
            cy.contains('Parolamı unuttum').click()
        }

        cy.get('#outlined-email-input')
            .type('Your Mail').should('have.value','Mail Control')
        cy.get('.forgotpassword-button-label').click()
        
        cy.screenshot('screenshot')
    })
})
