describe("Cypress GitHub actions demo", () => {
  it("Open pmtool and fill username", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });

  it("Open Page", () => {
    cy.visit("http://tredgate.com/pmtool");
  });

  it("Check header", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get(".form-title").should("be.visible");
  });
});
