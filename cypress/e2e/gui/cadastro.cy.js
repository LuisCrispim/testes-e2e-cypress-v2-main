import { fakerPT_BR as faker } from '@faker-js/faker';

describe('Deve se cadastrar com sucesso', () => {
  const usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  };

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.visit('/');
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(usuario.nome);
    cy.getByData('email-input').type(usuario.email);
    cy.getByData('senha-input').type(usuario.senha);
    cy.getByData('checkbox-input').click();

    cy.getByData('botao-enviar').click({ force: true });
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });
});
