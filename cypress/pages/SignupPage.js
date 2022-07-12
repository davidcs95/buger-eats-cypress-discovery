

class SignupPage{

    go() {
        cy.visit('/')
        
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name=address-number]').type(deliver.address.number)
        cy.get('input[name=address-details]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        //método contains pode ser usado também para buscar elementos na página
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        //instalando e importando a biblioteca cypress-file-upload é possivel utilizar o método attachFile
        //para anexar arquivos em formulários
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit() {
        cy.get('form button[type=submit]').click()
    }

    modalContentShouldBe(expectedMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMessage)
    }

    alertMessageShouldBe(expectedMessage){
        // cy.get('.alert-error').should('have.text', expectedMessage)

        //contains realiza uma combinação de seletor + texto do elemento
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }
}

//Utilizando new é possível exportar a classe já instanciada
export default new SignupPage;