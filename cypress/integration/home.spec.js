
//Define o nome da suíte de teste
// ()=> é uma arrow function ou função em javascript
describe('Home Page', ()=>{

    //it define o nome do caso de teste
    it('App deve estar online', ()=>{

        //.viewport define a resolução da tela
        cy.viewport(1440, 1080)

        //.visit navega para a URL informada no parâmetro
        cy.visit('https://buger-eats.vercel.app')

        //.get busca o elemento na página
        //.should realiza uma validação utilizando o método passado no primeiro parâmetro
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})