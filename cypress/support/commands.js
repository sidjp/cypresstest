Cypress.Commands.add('comandoPreencherCamposEnvia', function () {

    const longText = 'Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado.'

    cy.get('#firstName')
        .type('sidney')

    cy.get('#lastName')
        .type('mori')

    cy.get('#email')
        .type('sidjp@gmail.com')

    cy.get('#open-text-area')
        .type(longText, { delay: 0 })

    cy.get('button[type="submit"]')
        .click()
})
Cypress.Commands.add('comandoVerificaEmail', function () {

    cy.get('#firstName')
        .type('sidney')

    cy.get('#lastName')
        .type('mori')

    cy.get('#email')
        .type('sidjp@gmail,com')

    cy.get('#open-text-area')
        .type('test')

    cy.get('button[type="submit"]')
        .click()


})