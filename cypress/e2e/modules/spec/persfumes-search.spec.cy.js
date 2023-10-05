describe("Navigate To Search", () => {
  before(() => {
    cy.navigate("http://localhost:3002/");
  });

  it("should visit the search page", () => {
    cy.get(".NavBar__Btn")
      .should("be.visible")
      .should("have.class", "NavBar__Btn")
      .click();
    cy.get(":nth-child(6) > summary").should("be.visible").click();
  });

  it("should search for parfums", () => {
    cy.get("input").should("be.visible").type("Dir");
    cy.get(".Product_Card_Content")
      .should("be.visible")
      .find(".Typography")
      .should("contain", "Air Freshener AL DIRGHAM");
  });
});
