import config from "../../configs/config.json";

describe('E2E Homepage', () => {

  it('Homepage Is Up', () => {
    cy.visit(config.localUrl);
  });

})