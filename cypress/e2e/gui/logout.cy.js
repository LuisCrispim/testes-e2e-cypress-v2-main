describe('Deslogar o usuário com sucesso', () => {
  beforeEach(() => {
    cy.login();
  });
  it('Deve clicar no botão de sair e voltar para a página inicial', () => {
    cy.logout();
  });
});
