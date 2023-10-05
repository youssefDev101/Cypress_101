describe("Navigate To Specific Category", () => {
  before(() => {
    cy.navigate("http://localhost:3002/");
  });
  it("should navigate to category (femme)", () => {
    cy.get(".NavBar__Btn > .Svg__Icon").should("be.visible").click();
    cy.get(":nth-child(2) > summary").should("be.visible").click();
    cy.get('[open=""] > ul > :nth-child(1)').should("be.visible").click();
    cy.get(".ProductShop__Category > select")
      .should("be.visible")
      .and("value", "1");
    cy.url().should("include", "/shop?category=1");
    cy.get('.ProductShopList__Wrapper').should("be.visible").and("have.length.gt", 0);
  });
});
