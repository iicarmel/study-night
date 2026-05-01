describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to the Card Sets page", () => {
    cy.get("#cardSetPage").click();
    cy.contains("Card").should("be.visible");
  });

  it("navigates to the About page", () => {
    cy.get("#aboutPage").click();
    cy.contains("About").should("be.visible");
  });

  it("navigates to the Home page", () => {
    cy.get("#homePage").click();
    cy.contains("Study Night").should("be.visible");
  });
});