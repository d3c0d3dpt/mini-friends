const TEST_THEMES = [
  ["Light Theme", "light"],
  ["Dark Theme", "dark"],
];

const DOMAIN = Cypress.env("DOMAIN") || "localhost";

describe("Home Page", () => {
  for (const [theme, colorMode] of TEST_THEMES) {
    describe(theme, () => {
      before(() => {
        cy.visit(`http://${DOMAIN}:3000`, {
          onBeforeLoad(win) {
            win.localStorage.setItem("nuxt-color-mode", colorMode);
          },
        });

        cy.get("header .btn.btn-circle svg");
      });

      it("Desktop", () => {
        cy.viewport("macbook-15");

        cy.document().toMatchImageSnapshot({});
      });

      it("Mobile", () => {
        cy.viewport("iphone-xr");

        cy.document().toMatchImageSnapshot();
      });
    });
  }
});
