describe('Deve fazer transações com sucesso', () => {
  const transacao = 50;

  beforeEach(() => {
    cy.login();
  });
  it('Deve fazer fazer uma transferência com sucesso', () => {
    cy.getByData('select-opcoes').select('Transferência');

    cy.getByData('form-input').type(transacao);
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains(transacao);
  });
  it('Deve fazer um depósito com sucesso', () => {
    cy.getByData('select-opcoes').select('Depósito');

    cy.getByData('form-input').type(transacao);
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains(transacao);
  });
});
