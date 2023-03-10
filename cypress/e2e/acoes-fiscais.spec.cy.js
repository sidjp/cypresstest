///<reference types="Cypress" />

describe('Testes das funcionalidades da aba ações fiscais' ,function () {

  beforeEach('logar e acessar aba ações fiscais', function () {
    cy.comandoLogarnaUrleAcessarAcoesFiscais()
  })

  it('Deve obter sucesso ao cadastrar uma nova ação fiscal', function () {

    cy.comandoCadastrarNovaAcaoFiscal()

  })
  /* it('Deve obter sucesso ao editar uma ação fiscal', () => {

    //Acessar cadastro para edição cadastro de Ação Fiscal
    cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click()
    cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click()
    cy.get('.ag-row-first > [aria-colindex="7"] > .sc-BXpxD > .sc-hKgJUU').click()
    cy.get('.sc-gGmKaI > [tabindex="0"]').click();


    //Editar dados do formulário    
    cy.get('#tipoAcaoFiscalId').parent().click();
    cy.get('.Mui-selected').click();
    cy.get('#tabela').parent().click();
    cy.get('.sc-gGmKaI > [tabindex="0"]').click();
    cy.get('#nome').clear();
    cy.get('#nome').type('Teste Auto Editado');
    cy.get('#descricao').clear()
    cy.get('#descricao').type('Teste automatizado_editado');
    cy.get('.sc-jYCGPb > .MuiButton-contained').click();

    cy.get('.sc-gKseQn').should('be.visible')


  })


  it('Deve obter sucesso ao excluir uma ação fiscal', () => {

    //Excluir cadastro de Ação Fiscal
    cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click()
    cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click()
    cy.get('.ag-row-first > [aria-colindex="7"] > .sc-BXpxD > .sc-hKgJUU').click()
    cy.get('.lbBWig > .sc-cBNeex > .sc-gGmKaI > [tabindex="-1"]').click()
    cy.get('.sc-jNMcJZ > :nth-child(2)').click()

    cy.contains('Exclusão concluída');


  })

  it('Deve obter sucesso incluir, editar e excluir parâmetro da ação fiscal', () => {


    //Acessar formulário de nova Ação Fiscal    
    cy.contains('NOVO').click();

    //Preencher dados do formulário    
    cy.get('#tipoAcaoFiscalId').parent().click();
    cy.get('#menu- > .sc-cBNeex > .sc-gGmKaI > [tabindex="-1"]').click();
    cy.get('#tabela').parent().click();
    cy.contains('Malhas Fiscalização').click();
    cy.get('#nome').type('Teste Auto');
    cy.get('#descricao').type('Teste automatizado');
    //Inserir parametro
    cy.get('#parametro').type('Id_TESTEQA');
    cy.get('#valor').type('01/01/2023');

    cy.contains('+ Adicionar').click();

    // Alterar parametro
    cy.get('.sc-BXpxD > .sc-hKgJUU').click();
    cy.contains('Editar').click();
    cy.get('.sc-irOPex > [style="width: 35%;"] > .sc-ehSDrC > .sc-dOSRxR > #parametro').clear();
    cy.get('.sc-irOPex > [style="width: 35%;"] > .sc-ehSDrC > .sc-dOSRxR > #parametro').type('Id_alterado');
    cy.contains('OK').click();
    cy.contains('ID_ALTERADO');
    cy.contains('01/01/2023');

    //Exluir parametro
    cy.get('.sc-BXpxD > .sc-hKgJUU').click();
    cy.contains('Deletar').click();
    cy.contains('OK').click();

    cy.contains('Salvar').click();
    cy.contains('Registro criado com sucesso!')



    //Excluir cadastro de Ação Fiscal
    cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click()
    cy.get('[aria-colindex="1"] > .ag-header-cell-comp-wrapper > .ag-cell-label-container > .ag-header-cell-label > .ag-header-cell-text').click()
    cy.get('.ag-row-first > [aria-colindex="7"] > .sc-BXpxD > .sc-hKgJUU').click()
    cy.get('.lbBWig > .sc-cBNeex > .sc-gGmKaI > [tabindex="-1"]').click()
    cy.get('.sc-jNMcJZ > :nth-child(2)').click()

    cy.contains('Exclusão concluída');
 

  })*/
})
