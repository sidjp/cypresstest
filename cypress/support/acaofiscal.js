///<reference types="Cypress" />
Cypress.Commands.add('comandoLogarnaUrleAcessarAcoesFiscais', function () {
    //função logar e acessar aba ações fiscais 
    const urlPrincipal = 'http://sgf-hom.psgtecnologia.com.br/'
    const usuárioPrincipal = 'dev'
    const senhaPrincipal = 'senha'

    cy.visit(urlPrincipal)                          // acessa a url 
    cy.get('#username')                             //preenche campo username ou email
        .type(usuárioPrincipal)
    cy.get('#password')                             // preeche campo password
        .type(senhaPrincipal)
    cy.contains('input', 'Sign In')                 // encontra o elemento input com texto "Sign In" e clica
        .click()
    cy.contains('span', 'Configurações')            // encontra o elemento button com texto "Configurações" e clica
        .click()
    cy.contains('span', 'Ações Fiscais')            // encontra o elemento button com texto "Ações Ficais" e clica
        .click()
})

Cypress.Commands.add('comandoCadastrarNovaAcaoFiscal', function () {

    //Acessar formulário de nova Ação Fiscal    
    cy.contains('button', 'NOVO')                   // encontra o elemento button com texto "NOVO" e clica 
        .click()
    //Verificar campos obrigatórios
    cy.contains('button', 'Salvar')                 // encontra o elemento button com texto "Salvar" e clica 
        .click()
    cy.get('#mui-24-helper-text')                   // seleciona o elemento mui-24-helper-text
        .should('have.text', 'Este campo é obrigatório') // verifica se o texto "Este campo é obrigatório" foi exibido
    cy.get('#nome-helper-text')                     // seleciona o elemento nome-helper-text
        .should('have.text', 'Este campo é obrigatório') // verifica se o texto "Este campo é obrigatório" foi exibido
    cy.get('#descricao-helper-text')                // seleciona o elemento descricao-helper-text
        .should('have.text', 'Este campo é obrigatório') // verifica se o texto "Este campo é obrigatório" foi exibido
    //Verificar cancelamento
    cy.contains('button', 'Cancelar')               // encontra o elemento button com texto "Cancelar" e clica 
        .click()
    cy.contains('button', 'NÃO')                    // encontra o elemento button com texto "NÃO" e clica
        .click()
    //Preencher dados do formulário    
    cy.get('#mui-23')                               // acessa e clica na caixa de seleção Tipo de Ação Fiscal
        .click()
    cy.get('ul[role="listbox"]')                    // seleciona o elemento ul
        .contains('li[data-value="1"]', 'Malha')    // encontra o elemento li com o valor 1 e texto "Malha"
        .click()                                    // clica no elemento li encontrado de texto "Malha"
    cy.get('#mui-24')                               // acessa  e clica na caixa de seleção Tabela
        .click()
    cy.get('li[data-value="MALHAS_FISCALIZACAO"]')  // seleciona o elemento ul
        .contains('Malhas Fiscalização')            // encontra o elemento li com o valor "Malhas Fiscalização"
        .click()                                    // clica no elemento li encontrado de texto "Malhas Fiscalização"
    cy.get('#nome')                                 // seleciona o campo com id "nome"
        .type('Teste Auto')                         // digita no campo Test Auto
    cy.get('#descricao')                            // seleciona o campo com id "descrição"
        .type('Teste automatizado')                 // digita no campo Teste automatizado
    cy.contains('button', 'Salvar')                 // encontra o elemento button com texto "Salvar" e clica 
        .click()
    cy.get('#notistack-snackbar')                   // seleciona o elemento notistack-snackbar
        .should('contain.text', 'Registro criado com sucesso!') // verifica se o texto "Registro criado com sucesso!" foi exibido

})