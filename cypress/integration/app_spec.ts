describe("<App>", () => {
  it("redirects to dashboard after programmatic login", () => {
    cy.loginWithGoogle(); // This logs in the user
    cy.visit("/dashboard"); // Adjust this URL to where your dashboard is located

    // Your test code here to verify the dashboard functionality
  });
});
