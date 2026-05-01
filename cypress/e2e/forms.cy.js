describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:59415");
    cy.get("#cardSetPage").click();
  });

  it("creates a new card set with valid input", () => {
    cy.get("[data-cy='toggle_form']").click();

    cy.get("[data-cy='set_form']").within(() => {
      cy.get("input[name='titleInput']").type("JavaScript Basics");
      cy.get("input[type='submit']").click();
    });

    cy.contains("JavaScript Basics").should("be.visible");
  });

  it("shows an error when Create Set form is submitted with an empty title", () => {
    cy.get("[data-cy='toggle_form']").click();

    cy.get("[data-cy='set_form']").within(() => {
      cy.get("input[type='submit']").click();
    });

    cy.contains("TITLE CANNOT BE EMPTY").should("be.visible");
  });

  it("adds a new card with valid term and description", () => {
    cy.get("[data-cy='toggle_form']").click();

    cy.get("[data-cy='set_form']").within(() => {
      cy.get("input[name='titleInput']").type("HTML Basics");
      cy.get("input[type='submit']").click();
    });

    cy.contains("HTML Basics").click();

    cy.contains("button", /add|create/i).click();

    cy.get("[data-cy='card_form']").within(() => {
      cy.get("input[name='termInput']").type("HTML");
      cy.get("input[name='descriptionInput']").type("HyperText Markup Language");
      cy.get("input[type='submit']").click();
    });

    cy.contains("HTML").should("be.visible");
    cy.contains("HyperText Markup Language").should("exist");
  });

  it("shows an error when Add Card form is submitted with empty inputs", () => {
    cy.get("[data-cy='toggle_form']").click();

    cy.get("[data-cy='set_form']").within(() => {
      cy.get("input[name='titleInput']").type("CSS Basics");
      cy.get("input[type='submit']").click();
    });

    cy.contains("CSS Basics").click();

    cy.contains("button", /add|create/i).click();

    cy.get("[data-cy='card_form']").within(() => {
      cy.get("input[type='submit']").click();
    });

    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("be.visible");
  });
});