describe("Navigate To Shop", () => {
  const URL_ID = 1;
  const URL_CATEGORY_ID = 3;
  before(() => {
    cy.navigate("http://localhost:3002/");
  });
  it("should navigate to the shop", () => {
    cy.get(".swiper-slide-active > .Images__Banner__Content > .App_Btn")
      .should("be.visible")
      .click();
    cy.get(".Typography").should("be.visible").should("contain", "Nos Parfums");
    cy.get(".ProductShop__Category > select").should("be.visible").select("2");
    cy.get(":nth-child(1) > .Product_Card_Content > .Typography")
      .should("be.visible")
      .and("contain", "Armani Code")
      .click();
  });
  it("should navigate to details", () => {
    cy.navigate(
      `http://localhost:3002/products/${URL_ID}/category/${URL_CATEGORY_ID}`
    );
    cy.get("h1")
      .should("be.visible")
      .and("contain", "Acqua Di Gio");
    cy.get(".App_Btn")
      .should("be.visible")
      .and("contain", "Ajouter au Panier")
      .click();
    cy.get(".Navbar__Icons-badge").should("be.visible").and("contain", "1");
    cy.get("table").should("be.visible").and("have.length.gt", 0);
  });
});
