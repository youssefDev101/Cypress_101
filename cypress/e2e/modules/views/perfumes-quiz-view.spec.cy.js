describe("Navigate To Quiz", () => {
  before(() => {
    cy.navigate("http://localhost:3002/");
  });

  it("should visit the quiz", () => {
    cy.get('[src="/src/assets/images/icons/search.svg"]')
      .should("be.visible")
      .click();
  });

  it("should run the quiz", () => {
    cy.get(".App_Btn")
      .should("be.visible")
      .should("contain", "Démarrer")
      .should("have.class", "App_Btn")
      .click();

    cy.get("#data-GENDER-1 > .Typography")
      .should("be.visible")
      .should("contain", "Femme")
      .click();

    cy.get("#data-SITUATION-0 > .Typography")
      .should("be.visible")
      .should("contain", "Fete ou Marriage")
      .click();

    cy.get("#data-LONGEVITY-0 > .Typography")
      .should("be.visible")
      .should("contain", "1 - 2 heures")
      .click();

    cy.get("#data-FRAGRANCE-2 > .Typography")
      .should("be.visible")
      .should("contain", "Oriental")
      .click();
  });

  it("should open modal", () => {
    cy.interceptAPI("http://localhost:7777/openAI","perfumes-mock.json");
    //cy.wait("@interceptOpenAPI");
    cy.get("dialog > article")
      .should("be.visible")
      .should("contain", "Notre Recommendation");

    cy.get(".Perfume_Content").should("be.visible").should("have.length", 3);
    cy.get(".App_Btn").should("be.visible").should("contain", "VISIT SHOP");
  });
});
