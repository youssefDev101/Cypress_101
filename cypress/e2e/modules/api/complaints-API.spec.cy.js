describe("Request API", () => {
  /** COMPLAINTS API */
  it("should test POST complaints via API", () => {
    cy.request({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "https://1oe9yvuz.directus.app/items/complaints",
      body: {
        firstName: "cypress",
        lastName: "cypress",
        email: "test@gmail.com",
        description: "this cypress description",
        phone: "0788887766",
        type: "Reclamation",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.have.property("firstName", "cypress");
    });
  });

  it("should test GET complaints via API", () => {
    cy.request({
      method: "GET",
      headers: { "Content-Type": "application/json" },
      url: "https://1oe9yvuz.directus.app/items/complaints",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.not.empty;
    });
  });
});
