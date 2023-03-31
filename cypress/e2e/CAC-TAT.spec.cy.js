///<reference types="Cypress" />
describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(function () {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.comandoPreencherCamposEnvia();
    cy.get(".success").should("be.visible");
  });
  it("exibe mensagem de erro ao submeter o formulário com o email no formato inválido", function () {
    cy.comandoVerificaEmail();
    cy.get(".error").should("be.visible");
  });
  it("campo telefone continua vazio quando preenchido com valor não-numérico", function () {
    cy.get("#phone").type("abcdefghij").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio", function () {
    cy.get("#firstName").type("sidney");

    cy.get("#lastName").type("mori");

    cy.get("#email").type("sidjp@gmail.com");

    cy.get("#phone-checkbox").check();

    cy.get("#open-text-area").type("test");

    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome , sobrenome, email e telefone ", function () {
    cy.get("#firstName")
      .type("sidney")
      .should("have.value", "sidney")
      .clear()
      .should("have.value", "");

    cy.get("#lastName")
      .type("mori")
      .should("have.value", "mori")
      .clear()
      .should("have.value", "");

    cy.get("#email")
      .type("sidjp@gmail.com")
      .should("have.value", "sidjp@gmail.com")
      .clear()
      .should("have.value", "");

    cy.get("#open-text-area")
      .type("test")
      .should("have.value", "test")
      .clear()
      .should("have.value", "");

    cy.get("#phone")
      .type("123456789")
      .should("have.value", "123456789")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it("selecione um produto Youtube por seu texto", function () {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });
  it("seleciona um produto Mentoria por seu valor value", function () {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });
  it("selecione um produto Blog por seu indice", function () {
    cy.get("#product").select(1).should("have.value", "blog");
  });
  it("marca um tipo de atendimento feedback ", function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });
  it("marca cada tipo de atendimento ", function () {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });
  it("marcar ambos checkboxes,depois desmarca o ultimo ", function () {
    cy.get('input[type="checkbox"]')
    .check()
    .should("be.checked")
    .last()
    .uncheck()
    .should("not.be.checked");
  });
  it("marcar ambos checkboxes,depois desmarca o ultimo ", function () {
    cy.get('input[type="file"]#file-upload')
    .should("not.have.value")
    .selectFile('./cypress/fixtures/example.json')
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    });
  });
  it("selecione um arquivo simulando um drag-and-drop ", function () {
    cy.get('input[type="file"]')
    .should("not.have.value")
    .selectFile('./cypress/fixtures/example.json', {actio: 'drag-drop'})
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    });
  });
  it("selecione um arquivo utilizando um fixture para o qual foi dada um alias ", function () {
    cy.fixture('example.json').as ('sampleFile')
    cy.get('input[type="file"]')
    .selectFile('@sampleFile')
    .should("not.have.value")
  });
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
    cy.get('#privacy a').should('have.attr', 'target', '_blank');
  })
  it('acessa a página da política de privacidade removendo o target e então clicando no link', function(){
    cy.get('#privacy a')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('Talking About Testing').should('be.visible')
  })
});
