Cypress.Commands.add('getByData', (seletor) => {
  return cy.get(`[data-test=${seletor}]`);
});

Cypress.Commands.add(
  'login',
  (email = Cypress.env('email'), senha = Cypress.env('senha')) => {
    const login = () => {
      cy.visit('/');

      cy.getByData('botao-login').click();
      cy.getByData('email-input').type(email);
      cy.getByData('senha-input').type(senha, { log: false });

      cy.getByData('botao-enviar').click();

      cy.contains('Bem vindo de volta!').should('be.visible');
    };

    login();
  }
);

Cypress.Commands.add('logout', () => {
  cy.getByData('botao-sair').click();
  cy.url('/');
});
