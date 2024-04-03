describe("API Request Test", () => {
  it("successfully retrieves data and navigates to homepage", () => {
    // Making a GET request to JSONPlaceholder API
    cy.request("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        console.log("Response: ", response);
        cy.wait(1000); // Wait for 1 second; adjust as needed

        const adminUser = {
          id: "admin1",
          name: "Admin User",
          email: "admin@example.com",
          role: "user",
        };

        // Set the user data in localStorage before visiting the page
        cy.visit("/", {
          onBeforeLoad: (window) => {
            window.localStorage.setItem("userData", JSON.stringify(adminUser));
          },
        });

        cy.visit("/dashboard");
      }
    );
  });
});
