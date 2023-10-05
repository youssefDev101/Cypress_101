describe("Navigate To Contact", () => {
  let CAPTCHA_TEXT = "";
  before(() => {
    cy.navigate("http://localhost:3002/contacts");
  });
  it("should verify if we are in the contact page", () => {
    cy.get(".Hgroup__Header")
      .should("be.visible")
      .should("contain", "Contactez-Nous");
  });

  it("should submit the form", () => {
    cy.get(".App_Btn").should("be.visible").should("be.disabled");
    cy.get("[name=firstName]").should("be.visible").type("firstName");
    cy.get("[name=lastname]").should("be.visible").type("lastname");
    cy.get("[name=email]").should("be.visible").type("test@gmail.com");
    cy.get("[name=phone]").should("be.visible").type("0788887766");
    cy.get("select").should("be.visible").select("reclamation");
    cy.get("textarea").should("be.visible").type("this cypress test");
    cy.get(".Captcha__Content")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        CAPTCHA_TEXT = text;
        cy.get('input[placeholder="Enter captcha code"]')
          .type(CAPTCHA_TEXT)
          .should("have.value", CAPTCHA_TEXT);
      });
  });

  it("should send the form data", () => {
    cy.get(".App_Btn").should("be.visible").should("be.not.disabled").click();
    cy.get(".Images__Banner__Content")
      .should("be.visible")
      .should("contain", "Livraison Gratuite");
  });
});
