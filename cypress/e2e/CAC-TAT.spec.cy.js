
///<reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(function () {

    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', function () {

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', function () {
    
    cy.comandoPreencherCamposEnvia()
    cy.get('.success')
      .should('be.visible')
  })
  it('exibe mensagem de erro ao submeter o formulário com o email no formato inválido', function () {

    cy.comandoVerificaEmail()
    cy.get('.error')
      .should('be.visible')
  })
  it('campo telefone continua vazio quando preenchido com valor não-numérico', function () {

    cy.get('#phone')
      .type('abcdefghij')
      .should('have.value', '')

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio', function () {

    cy.get('#firstName')
      .type('sidney')

    cy.get('#lastName')
      .type('mori')

    cy.get('#email')
      .type('sidjp@gmail.com')

    cy.get('#phone-checkbox')
      .click()

    cy.get('#open-text-area')
      .type('test')

    cy.get('button[type="submit"]')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  it('preenche e limpa os campos nome , sobrenome, email e telefone ', function () {

    cy.get('#firstName')
      .type('sidney')
      .should('have.value', 'sidney')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('mori')
      .should('have.value', 'mori')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('sidjp@gmail.com')
      .should('have.value', 'sidjp@gmail.com')
      .clear()
      .should('have.value', '')

    cy.get('#open-text-area')
      .type('test')
      .should('have.value', 'test')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')

  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {

    cy.get('button[type="submit"]')
      .click()

    cy.get('.error')
      .should('be.visible')

  })

  
})